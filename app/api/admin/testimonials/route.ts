import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Testimonial from '@/lib/models/Testimonial';
import { testimonialSchema } from '@/lib/validations';
import { requireAdmin } from '@/lib/adminGuard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const testimonials = await Testimonial.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ testimonials });
}

export async function POST(req: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = testimonialSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  await connectDB();
  const testimonial = await Testimonial.create(parsed.data);
  return NextResponse.json({ testimonial }, { status: 201 });
}
