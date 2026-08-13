import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB } from '@/lib/db';
import Message from '@/lib/models/Message';
import { requireAdmin } from '@/lib/adminGuard';

const patchSchema = z.object({
  status: z.enum(['unread', 'read', 'archived']),
});

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid status.' }, { status: 400 });
  }

  await connectDB();
  const message = await Message.findByIdAndUpdate(params.id, { status: parsed.data.status }, { new: true });
  if (!message) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  return NextResponse.json({ message });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const deleted = await Message.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
