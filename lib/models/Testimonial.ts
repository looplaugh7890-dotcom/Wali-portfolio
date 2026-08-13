import { Schema, models, model } from 'mongoose';

export interface ITestimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  message: string;
  featured: boolean;
  createdAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    name: { type: String, required: true },
    role: { type: String, default: '' },
    company: { type: String, default: '' },
    image: { type: String, default: '' },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    message: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default models.Testimonial || model<ITestimonial>('Testimonial', TestimonialSchema);
