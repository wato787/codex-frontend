import { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="mb-2 text-xl font-semibold text-slate-900">
        {project.title}
      </h2>
      <p className="mb-4 text-sm text-slate-600">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>{project.members}名のメンバー</span>
        <span>{project.createdAt}</span>
      </div>
    </div>
  );
}
