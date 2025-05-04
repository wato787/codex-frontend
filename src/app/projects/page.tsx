import { CreateButton } from "@/components/CreateButton";
import { ProjectFilters } from "./components/ProjectFilters";
import { ProjectList } from "./components/ProjectList";
import { ProjectSearch } from "./components/ProjectSearch";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">プロジェクト一覧</h1>
        <CreateButton />
      </div>

      <div className="mb-6">
        <ProjectSearch />
      </div>

      <div className="mb-6">
        <ProjectFilters />
      </div>

      <ProjectList />
    </div>
  );
}
