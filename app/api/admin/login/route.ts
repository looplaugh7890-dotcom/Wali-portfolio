import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import Admin from '@/lib/models/Admin';
import { loginSchema } from '@/lib/validations';
import { createSessionToken, setSessionCookie } from '@/lib/auth';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);
  if (!rateLimit(`login:${ip}`, 8, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many attempts. Try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Enter a valid email and password.' }, { status: 400 });
  }

  try {
    await connectDB();
    const admin = await Admin.findOne({ email: parsed.data.email.toLowerCase() });

    // Always compare against something to avoid timing differences revealing
    // whether the email exists.
    const hash = admin?.passwordHash ?? '$2a$12$invalidinvalidinvalidinvalidinvalidinvalidinvalidin';
    const valid = await bcrypt.compare(parsed.data.password, hash);

    if (!admin || !valid) {
      return NextResponse.json({ error: 'Incorrect email or password.' }, { status: 401 });
    }

    const token = await createSessionToken({ adminId: String(admin._id), email: admin.email });
    await setSessionCookie(token);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[admin/login] error:', err);
    return NextResponse.json({ error: 'Something went wrong. Try again.' }, { status: 500 });
  }
}
