import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminGuard';
import { v2 as cloudinary } from 'cloudinary';

export async function POST(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      { error: 'Cloudinary environment variables are missing in .env.local' },
      { status: 500 }
    );
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const mimeType = file.type || 'image/jpeg';
    const base64 = buffer.toString('base64');
    const dataUri = `data:${mimeType};base64,${base64}`;

    const uploadResult = await cloudinary.uploader.upload(dataUri, {
      folder: 'portfolio',
      resource_type: 'auto',
    });

    return NextResponse.json({
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });
  } catch (err: any) {
    console.error('Cloudinary upload error:', err);
    let message = err.message || 'Image upload failed.';
    if (message.includes('missing permissions') || message.includes('actions=["create"]')) {
      message = 'Cloudinary 403 Forbidden: This API Key is missing upload/create permissions. Go to Cloudinary Settings -> Access Keys and select "Full Access" or generate a new key.';
    } else if (err.http_code === 403 || message.includes('cloud_name mismatch') || message.includes('Must supply api_key')) {
      message = 'Cloudinary 403 Forbidden: Invalid Cloud Name or API Credentials. Please check CLOUDINARY_CLOUD_NAME in .env.local matches your Cloudinary Dashboard.';
    }
    return NextResponse.json(
      { error: message },
      { status: 400 }
    );
  }
}
