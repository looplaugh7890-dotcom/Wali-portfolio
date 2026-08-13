import { NextResponse } from 'next/server';
import { getProjectBySlug } from '@/lib/data';

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ project });
}
