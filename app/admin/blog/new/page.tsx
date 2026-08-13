import { PostForm } from '@/components/admin/PostForm';

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">New Post</h1>
      <p className="mt-1 text-sm text-white/50">Write a new blog article.</p>
      <div className="mt-8">
        <PostForm />
      </div>
    </div>
  );
}
