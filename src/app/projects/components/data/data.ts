import { Project } from "../../types";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Webアプリケーション開発",
    description: "ReactとTypeScriptを使用したモダンなWebアプリケーションの開発",
    skills: ["React", "TypeScript", "Node.js"],
    members: 3,
    createdAt: "2024-03-20",
  },
  {
    id: "2",
    title: "モバイルアプリ開発",
    description: "Flutterを使用したクロスプラットフォームアプリの開発",
    skills: ["Flutter", "Dart", "Firebase"],
    members: 2,
    createdAt: "2024-03-19",
  },
];
