// src/projects.ts

export interface Project {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  description: string;
  repoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ggul-Johab (꿀조합)",
    summary: "나만의 편의점 레시피를 공유하는 커뮤니티 플랫폼",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    description: "사용자가 자신만의 음식 조합을 공유하고 추천받을 수 있는 서비스입니다. Prisma ORM을 통해 복잡한 데이터 관계를 정의하고 관리했습니다.",
    repoUrl: "https://github.com/sisu-01/ggul-johab"
  },
  {
    id: 2,
    title: "Roll-den-bell (롤든벨)",
    summary: "게임 지식 퀴즈 및 SEO 최적화 프로젝트",
    tags: ["React", "AdSense", "SEO"],
    description: "구글 검색 결과 노출을 극대화하기 위한 SEO 설정법을 익히고, 사용자 경험(UX)의 중요성을 체감하며 제작한 퀴즈 앱입니다.",
    repoUrl: "https://github.com/sisu-01/roll-den-bell"
  }
];