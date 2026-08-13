import mongoose, { Schema, models, model } from 'mongoose';

export interface IAdmin {
  _id: string;
  email: string;
  passwordHash: string;
  name: string;
  createdAt: Date;
}

const AdminSchema = new Schema<IAdmin>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  name: { type: String, default: 'Wali Aslam' },
  createdAt: { type: Date, default: Date.now },
});

export default models.Admin || model<IAdmin>('Admin', AdminSchema);
