import { Schema, models, model } from 'mongoose';

export interface IProject {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  services: string[];
  technologies: string[];
  client: string;
  year: number;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  featured: boolean;
  order: number;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    services: { type: [String], default: [] },
    technologies: { type: [String], default: [] },
    client: { type: String, default: '' },
    year: { type: Number, default: () => new Date().getFullYear() },
    thumbnail: { type: String, default: '' },
    heroImage: { type: String, default: '' },
    gallery: { type: [String], default: [] },
    liveUrl: { type: String, default: '' },
    githubUrl: { type: String, default: '' },
    challenge: { type: String, default: '' },
    solution: { type: String, default: '' },
    results: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  },
  { timestamps: true }
);

export default models.Project || model<IProject>('Project', ProjectSchema);
