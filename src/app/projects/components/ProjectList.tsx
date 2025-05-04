import { mockProjects } from "./data/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mockProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
