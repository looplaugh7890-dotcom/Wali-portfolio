import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Post, { IPost } from '@/lib/models/Post';
import { postSchema } from '@/lib/validations';
import { requireAdmin } from '@/lib/adminGuard';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const post = await Post.findById(params.id).lean();
  if (!post) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  return NextResponse.json({ post });
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

  const parsed = postSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  await connectDB();

  if (parsed.data.slug) {
    const clash = await Post.findOne({ slug: parsed.data.slug, _id: { $ne: params.id } });
    if (clash) return NextResponse.json({ error: 'A post with that slug already exists.' }, { status: 409 });
  }

  const update: Record<string, unknown> = { ...parsed.data };
  if (parsed.data.published) {
    const current = await Post.findById(params.id).lean<IPost | null>();
    if (current && !current.publishedAt) {
      update.publishedAt = new Date();
    }
  }

  const post = await Post.findByIdAndUpdate(params.id, update, { new: true });
  if (!post) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  return NextResponse.json({ post });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const deleted = await Post.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
