import { Schema, models, model } from 'mongoose';

export interface IMessage {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  status: 'unread' | 'read' | 'archived';
  createdAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: '' },
    service: { type: String, required: true },
    budget: { type: String, default: '' },
    message: { type: String, required: true },
    status: { type: String, enum: ['unread', 'read', 'archived'], default: 'unread' },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default models.Message || model<IMessage>('Message', MessageSchema);
