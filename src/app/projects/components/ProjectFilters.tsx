export function ProjectFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700">
          技術スタック
        </label>
        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="">すべて</option>
          <option value="react">React</option>
          <option value="vue">Vue.js</option>
          <option value="angular">Angular</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700">メンバー数</label>
        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="">すべて</option>
          <option value="1-3">1-3人</option>
          <option value="4-6">4-6人</option>
          <option value="7+">7人以上</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700">並び替え</label>
        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="newest">最新順</option>
          <option value="oldest">古い順</option>
          <option value="members">メンバー数順</option>
        </select>
      </div>
    </div>
  );
}
