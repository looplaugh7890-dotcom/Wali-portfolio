import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Project from '@/lib/models/Project';
import { projectSchema } from '@/lib/validations';
import { requireAdmin } from '@/lib/adminGuard';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const project = await Project.findById(params.id).lean();
  if (!project) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  return NextResponse.json({ project });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = projectSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  try {
    await connectDB();

    if (parsed.data.slug) {
      const clash = await Project.findOne({ slug: parsed.data.slug, _id: { $ne: params.id } });
      if (clash) {
        return NextResponse.json({ error: 'A project with that slug already exists.' }, { status: 409 });
      }
    }

    const project = await Project.findByIdAndUpdate(params.id, parsed.data, { new: true });
    if (!project) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
    return NextResponse.json({ project });
  } catch (err) {
    console.error('[admin/projects/:id] update error:', err);
    return NextResponse.json({ error: 'Could not update the project.' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const deleted = await Project.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
