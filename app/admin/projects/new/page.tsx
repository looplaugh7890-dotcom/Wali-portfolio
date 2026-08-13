import { ProjectForm } from '@/components/admin/ProjectForm';

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">New Project</h1>
      <p className="mt-1 text-sm text-white/50">Add a case study to your portfolio.</p>
      <div className="mt-8">
        <ProjectForm />
      </div>
    </div>
  );
}
