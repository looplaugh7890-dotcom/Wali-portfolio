import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Testimonial from '@/lib/models/Testimonial';
import { testimonialSchema } from '@/lib/validations';
import { requireAdmin } from '@/lib/adminGuard';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = testimonialSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  await connectDB();
  const testimonial = await Testimonial.findByIdAndUpdate(params.id, parsed.data, { new: true });
  if (!testimonial) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  return NextResponse.json({ testimonial });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const deleted = await Testimonial.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
