import 'server-only';
import { connectDB } from './db';
import Project, { IProject } from './models/Project';
import Testimonial, { ITestimonial } from './models/Testimonial';
import Post, { IPost } from './models/Post';

function serialize<T>(doc: any): T {
  return JSON.parse(JSON.stringify(doc));
}

export async function getPublishedProjects(): Promise<IProject[]> {
  try {
    await connectDB();
    const projects = await Project.find({ status: 'published' })
      .sort({ featured: -1, order: 1, createdAt: -1 })
      .lean();
    return serialize(projects);
  } catch (err) {
    console.warn('[data] Could not load projects — is MONGODB_URI set?', (err as Error).message);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<IProject | null> {
  try {
    await connectDB();
    const project = await Project.findOne({ slug, status: 'published' }).lean();
    return project ? serialize(project) : null;
  } catch {
    return null;
  }
}

export async function getAdjacentProject(order: number): Promise<IProject | null> {
  try {
    await connectDB();
    const next = await Project.findOne({ status: 'published', order: { $gt: order } })
      .sort({ order: 1 })
      .lean();
    const fallback = next ?? (await Project.findOne({ status: 'published' }).sort({ order: 1 }).lean());
    return fallback ? serialize(fallback) : null;
  } catch {
    return null;
  }
}

export async function getFeaturedTestimonials(): Promise<ITestimonial[]> {
  try {
    await connectDB();
    const testimonials = await Testimonial.find({ featured: true }).sort({ createdAt: -1 }).lean();
    return serialize(testimonials);
  } catch (err) {
    console.warn('[data] Could not load testimonials — is MONGODB_URI set?', (err as Error).message);
    return [];
  }
}

export async function getPublishedPosts(): Promise<IPost[]> {
  try {
    await connectDB();
    const posts = await Post.find({ published: true }).sort({ publishedAt: -1, createdAt: -1 }).lean();
    return serialize(posts);
  } catch (err) {
    console.warn('[data] Could not load posts — is MONGODB_URI set?', (err as Error).message);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<IPost | null> {
  try {
    await connectDB();
    const post = await Post.findOne({ slug, published: true }).lean();
    return post ? serialize(post) : null;
  } catch {
    return null;
  }
}
