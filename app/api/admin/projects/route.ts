import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Project from '@/lib/models/Project';
import { projectSchema } from '@/lib/validations';
import { requireAdmin } from '@/lib/adminGuard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const projects = await Project.find().sort({ order: 1, createdAt: -1 }).lean();
  return NextResponse.json({ projects });
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

  const parsed = projectSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  try {
    await connectDB();
    const existing = await Project.findOne({ slug: parsed.data.slug });
    if (existing) {
      return NextResponse.json({ error: 'A project with that slug already exists.' }, { status: 409 });
    }
    const project = await Project.create(parsed.data);
    return NextResponse.json({ project }, { status: 201 });
  } catch (err) {
    console.error('[admin/projects] create error:', err);
    return NextResponse.json({ error: 'Could not create the project.' }, { status: 500 });
  }
}
