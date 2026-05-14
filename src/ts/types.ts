export const CATEGORIES = ["프론트엔드", "백엔드", "인프라"] as const;
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
  title: string;
  subtitle: string;
  summary: string;
  isMain: boolean;
  techStack: StackDetail[];
  etc: string;
  repoUrl: string;
}
export const EXCEPTION_SLUGS: Record<string, string> = {
  "HTML": "html5",
  "Java": "openjdk",
  "WebSocket": "socketdotio",
  // 필요한 예외가 있다면 여기에 추가하세요!
};