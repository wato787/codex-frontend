export function ProjectSearch() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="プロジェクトを検索..."
        className="w-full rounded-lg border border-slate-200 px-4 py-2 pl-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <svg
        className="absolute left-3 top-2.5 h-5 w-5 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
