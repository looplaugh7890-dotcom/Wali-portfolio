import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Post from '@/lib/models/Post';
import { postSchema } from '@/lib/validations';
import { requireAdmin } from '@/lib/adminGuard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();
  const posts = await Post.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ posts });
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

  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  try {
    await connectDB();
    const existing = await Post.findOne({ slug: parsed.data.slug });
    if (existing) {
      return NextResponse.json({ error: 'A post with that slug already exists.' }, { status: 409 });
    }
    const payload = {
      ...parsed.data,
      publishedAt: parsed.data.published ? new Date() : undefined,
    };
    const post = await Post.create(payload);
    return NextResponse.json({ post }, { status: 201 });
  } catch (err) {
    console.error('[admin/blog] create error:', err);
    return NextResponse.json({ error: 'Could not create the post.' }, { status: 500 });
  }
}
