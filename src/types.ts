export const CATEGORIES = ["프론트엔드", "백엔드", "데브옵스"] as const;
export type Type = (typeof CATEGORIES)[number];
export type StackDetail = {
  type: Type;
  tags: string[]; 
  contents: {
    features: string;
    description: string;
  }[];
}
export type ProjectType = {
  id: number;
  title: string;
  summary: string;
  isMain: boolean;
  techStack: StackDetail[];
  etc: string;
  repoUrl: string;
}