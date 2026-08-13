import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Project from '@/lib/models/Project';
import Message from '@/lib/models/Message';
import Post from '@/lib/models/Post';
import { requireAdmin } from '@/lib/adminGuard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  await connectDB();

  const [totalProjects, featuredProjects, totalMessages, unreadMessages, publishedPosts, recentMessages] =
    await Promise.all([
      Project.countDocuments(),
      Project.countDocuments({ featured: true }),
      Message.countDocuments(),
      Message.countDocuments({ status: 'unread' }),
      Post.countDocuments({ published: true }),
      Message.find().sort({ createdAt: -1 }).limit(5).lean(),
    ]);

  return NextResponse.json({
    totalProjects,
    featuredProjects,
    totalMessages,
    unreadMessages,
    publishedPosts,
    recentMessages,
  });
}
