import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(120),
  email: z.string().trim().email('Enter a valid email'),
  phone: z.string().trim().max(40).optional().default(''),
  service: z.string().trim().min(1, 'Select a service').max(80),
  budget: z.string().trim().max(80).optional().default(''),
  message: z.string().trim().min(10, 'Message is too short').max(5000),
  // Honeypot field — real users never fill this in. Bots that fill every
  // field usually catch this one.
  company: z.string().max(0).optional().default(''),
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1),
});

export const projectSchema = z.object({
  title: z.string().trim().min(2).max(160),
  slug: z.string().trim().min(2).max(160).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase, numbers and hyphens only'),
  shortDescription: z.string().trim().min(2).max(280),
  description: z.string().trim().min(2),
  category: z.string().trim().min(1),
  services: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
  client: z.string().trim().optional().default(''),
  year: z.coerce.number().int().min(2000).max(2100).default(new Date().getFullYear()),
  thumbnail: z.string().trim().optional().default(''),
  heroImage: z.string().trim().optional().default(''),
  gallery: z.array(z.string()).default([]),
  liveUrl: z.string().trim().optional().default(''),
  githubUrl: z.string().trim().optional().default(''),
  challenge: z.string().trim().optional().default(''),
  solution: z.string().trim().optional().default(''),
  results: z.string().trim().optional().default(''),
  featured: z.boolean().default(false),
  order: z.coerce.number().default(0),
  status: z.enum(['draft', 'published']).default('draft'),
});

export const testimonialSchema = z.object({
  name: z.string().trim().min(2).max(120),
  role: z.string().trim().optional().default(''),
  company: z.string().trim().optional().default(''),
  image: z.string().trim().optional().default(''),
  rating: z.coerce.number().int().min(1).max(5).default(5),
  message: z.string().trim().min(2),
  featured: z.boolean().default(false),
});

export const postSchema = z.object({
  title: z.string().trim().min(2).max(200),
  slug: z.string().trim().min(2).max(200).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase, numbers and hyphens only'),
  excerpt: z.string().trim().min(2).max(400),
  content: z.string().trim().min(2),
  coverImage: z.string().trim().optional().default(''),
  category: z.string().trim().optional().default('General'),
  tags: z.array(z.string()).default([]),
  author: z.string().trim().optional().default('Wali Aslam'),
  published: z.boolean().default(false),
  seoTitle: z.string().trim().optional().default(''),
  seoDescription: z.string().trim().optional().default(''),
});
