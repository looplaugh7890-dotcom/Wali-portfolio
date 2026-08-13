import { Schema, models, model } from 'mongoose';

export interface IPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  published: boolean;
  publishedAt?: Date;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, default: '' },
    category: { type: String, default: 'General' },
    tags: { type: [String], default: [] },
    author: { type: String, default: 'Wali Aslam' },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
    seoTitle: { type: String, default: '' },
    seoDescription: { type: String, default: '' },
  },
  { timestamps: true }
);

export default models.Post || model<IPost>('Post', PostSchema);
