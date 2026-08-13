'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PostForm, PostFormValues } from '@/components/admin/PostForm';

export default function EditPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostFormValues | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/blog/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((json) => setPost(json.post))
      .catch(() => setNotFound(true));
  }, [id]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Edit Post</h1>
      <p className="mt-1 text-sm text-white/50">Update this article.</p>
      <div className="mt-8">
        {notFound ? (
          <p className="text-sm text-white/40">Post not found.</p>
        ) : !post ? (
          <p className="text-sm text-white/40">Loading…</p>
        ) : (
          <PostForm initial={post} postId={id} />
        )}
      </div>
    </div>
  );
}
