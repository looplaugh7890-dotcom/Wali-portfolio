'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ProjectForm, ProjectFormValues } from '@/components/admin/ProjectForm';

export default function EditProjectPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectFormValues | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/projects/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((json) => setProject(json.project))
      .catch(() => setNotFound(true));
  }, [id]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Edit Project</h1>
      <p className="mt-1 text-sm text-white/50">Update this case study.</p>
      <div className="mt-8">
        {notFound ? (
          <p className="text-sm text-white/40">Project not found.</p>
        ) : !project ? (
          <p className="text-sm text-white/40">Loading…</p>
        ) : (
          <ProjectForm initial={project} projectId={id} />
        )}
      </div>
    </div>
  );
}
