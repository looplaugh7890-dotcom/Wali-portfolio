import { NextResponse } from 'next/server';
import { getFeaturedTestimonials } from '@/lib/data';

export async function GET() {
  const testimonials = await getFeaturedTestimonials();
  return NextResponse.json({ testimonials });
}
