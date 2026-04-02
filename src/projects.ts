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
    title: "V-pad",
    summary: "키로거 방지 보안 가상 키패드",
    tags: ["Javascript", "Node.js", "Linux", "Apache"],
    description: "",
    repoUrl: ""
  },
  {
    id: 2,
    title: "PowerWinup",
    summary: "자산관리 윈도우 업데이트 제어",
    tags: ["HTML", "CSS", "Javascript", "Java", "Spring", "Websocket", "MariaDB", "Linux", "Tomcat", "Apache"],
    description: "진짜입",
    repoUrl: ""
  },
  {
    id: 3,
    title: "SISU",
    summary: "개인 블로그",
    tags: ["HTML", "CSS", "Javascript", "Python", "Django", "MariaDB", "Linux", "Nginx", "Docker"],
    description: "ㅋㅋ긔",
    repoUrl: ""
  },
  {
    id: 4,
    title: "카연갤 북마크",
    summary: "개인 블로그",
    tags: ["HTML", "CSS", "Javascript", "React", "Next.js", "Python", "MongoDB", "Linux", "Docker"],
    description: "ㅋㅋ긔",
    repoUrl: ""
  },
  {
    id: 4,
    title: "써브웨이 라벨 프린팅",
    summary: "개인 블로그",
    tags: ["HTML", "CSS", "Javascript", "React", "Next.js", "Python", "MongoDB", "Linux", "Docker"],
    description: "ㅋㅋ긔",
    repoUrl: ""
  },
  {
    id: 4,
    title: "게임 데브 툴",
    summary: "개인 블로그",
    tags: ["HTML", "CSS", "Javascript", "React", "Next.js", "Python", "MongoDB", "Linux", "Docker"],
    description: "ㅋㅋ긔",
    repoUrl: ""
  },
  {
    id: 4,
    title: "도전! 롤든벨",
    summary: "개인 블로그",
    tags: ["HTML", "CSS", "Javascript", "React", "Next.js", "Python", "MongoDB", "Linux", "Docker"],
    description: "ㅋㅋ긔",
    repoUrl: ""
  },

];