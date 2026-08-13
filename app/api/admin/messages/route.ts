import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Message from '@/lib/models/Message';
import { requireAdmin } from '@/lib/adminGuard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const messages = await Message.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ messages });
}
