import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';
import { Portfolio } from '@/components/Portfolio';
import { Process } from '@/components/Process';
import { GrowthDiagram } from '@/components/GrowthDiagram';
import { Testimonials } from '@/components/Testimonials';
import { BlogPreview } from '@/components/BlogPreview';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { getPublishedProjects, getFeaturedTestimonials, getPublishedPosts } from '@/lib/data';

export const revalidate = 60;

export default async function Home() {
  const [projects, testimonials, posts] = await Promise.all([
    getPublishedProjects(),
    getFeaturedTestimonials(),
    getPublishedPosts(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Portfolio projects={projects} />
        <Process />
        <GrowthDiagram />
        <Testimonials testimonials={testimonials} />
        <BlogPreview posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
