import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import bcrypt from 'bcryptjs';
import { connectDB } from '../lib/db';
import Admin from '../lib/models/Admin';
import Project from '../lib/models/Project';
import Testimonial from '../lib/models/Testimonial';
import Post from '../lib/models/Post';

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in .env.local before seeding.');
    process.exit(1);
  }

  await connectDB();

  const existing = await Admin.findOne({ email: email.toLowerCase() });
  if (existing) {
    console.log(`Admin account for ${email} already exists — skipping admin creation.`);
  } else {
    const passwordHash = await bcrypt.hash(password, 12);
    await Admin.create({ email: email.toLowerCase(), passwordHash, name: 'Wali Aslam' });
    console.log(`Created admin account for ${email}.`);
  }

  const projectCount = await Project.countDocuments();
  if (projectCount === 0) {
    await Project.create([
      {
        title: 'Sample Project — Replace Me',
        slug: 'sample-project',
        shortDescription: 'This is a placeholder project. Edit or delete it from /admin/projects.',
        description:
          'Add a real case study here: what the client needed, what you built, and how it performed. This placeholder exists only so the portfolio grid has something to show before you add your own work.',
        category: 'Websites',
        services: ['Web Development'],
        technologies: ['Next.js', 'Tailwind CSS'],
        client: 'Placeholder Client',
        year: new Date().getFullYear(),
        thumbnail: '',
        heroImage: '',
        featured: true,
        order: 0,
        status: 'draft',
      },
    ]);
    console.log('Added one placeholder project (status: draft) — visit /admin/projects to replace it.');
  }

  const testimonialCount = await Testimonial.countDocuments();
  if (testimonialCount === 0) {
    console.log('No testimonials seeded — add real ones from /admin/testimonials when you have them.');
  }

  const postCount = await Post.countDocuments();
  if (postCount === 0) {
    console.log('No blog posts seeded — add your first post from /admin/blog.');
  }

  console.log('Seed complete.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
