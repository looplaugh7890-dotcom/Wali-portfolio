import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Message from '@/lib/models/Message';
import { contactSchema } from '@/lib/validations';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);
  if (!rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many messages sent. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || 'Please check the form and try again.' },
      { status: 400 }
    );
  }

  // Honeypot tripped — silently pretend success so bots don't learn anything.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  try {
    await connectDB();
    const { company, ...data } = parsed.data;
    await Message.create(data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Failed to save message:', err);
    return NextResponse.json(
      { error: 'Could not send your message right now. Please try again shortly.' },
      { status: 500 }
    );
  }
}
