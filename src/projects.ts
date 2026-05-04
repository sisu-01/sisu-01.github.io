// src/projects.ts
import type { ProjectType } from "./types";


export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "V-pad",
    summary: "키로거 방지 보안 가상 키패드",
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: ["HTML", "CSS", "JavaScript"],
        contents: [
          {
            features: "가상키패드",
            description: "키로거 회피 컄;",
          },
        ]
      },
      {
        type: "백엔드",
        tags: ["Node.js"],
        contents: [
          {
            features: "express;;",
            description: "끼얏호호호"
          },
          {
            features: "AES 양방향 대칭키 헤응",
            description: "크앗"
          }
        ]
      }
    ],
    // tags: [, "", "", "Linux", "Apache"],
    etc: "뭐 그런 랄까 ㅋㅋ",
    repoUrl: ""
  },
  // {
  //   id: 2,
  //   title: "몰래 만든 사이드 ㅋㅋ",
  //   summary: "으햐햐햐햣",
  //   isMain: false,
  //   techStack: [
  //     {
  //       type: "데브옵스",
  //       tags: ["Docker"],
  //       contents: [
  //         {
  //           features: "도커가 자동으로 꺼짐;",
  //           description: "이게 맞나 슈슝",
  //         }
  //       ]
  //     }
  //   ],
  //   // tags: [, "JavaScript", "Node.js", "Linux", "Apache"],
  //   etc: "그 없",
  //   repoUrl: ""
  // },
  // {
  //   id: 3,
  //   title: "지구정복해킹툴",
  //   summary: "이거 있으면 지구 멸망",
  //   isMain: true,
  //   techStack: [
  //     {
  //       type: "백엔드",
  //       tags: ["Python"],
  //       contents: [
  //         {
  //           features: "사람 머리에 짜장면 소환",
  //           description: "마법으로 구현했습니다 굳굳",
  //         }
  //       ]
  //     }
  //   ],
  //   // tags: [, "JavaScript", "Node.js", "Linux", "Apache"],
  //   etc: "너만 쓰세요 ㅎㅎ",
  //   repoUrl: "https://www.naver.com"
  // },






  // {
  //   id: 2,
  //   title: "PowerWinup",
  //   summary: "자산관리 및 윈도우 업데이트 제어",
  //   tags: ["HTML", "CSS", "JavaScript", "Java", "Spring", "Websocket", "MariaDB", "Linux", "Tomcat", "Apache"],
  //   description: "진짜입",
  //   repoUrl: ""
  // },
  // {
  //   id: 3,
  //   title: "SISU",
  //   summary: "개인 블로그",
  //   tags: ["HTML", "CSS", "JavaScript", "Python", "Django", "MariaDB", "Linux", "Nginx", "Docker"],
  //   description: "ㅋㅋ긔",
  //   repoUrl: "https://github.com/sisu-01/sisu2"
  // },
  // {
  //   id: 4,
  //   title: "카연갤 북마크",
  //   summary: "파편화된 만화들을 군집화",
  //   tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Python", "MongoDB", "Linux", "Docker"],
  //   description: "ㅋㅋ긔",
  //   repoUrl: "https://github.com/sisu-01/cartoon_nextjs"
  // },
  // {
  //   id: 5,
  //   title: "써브웨이 라벨 프린팅",
  //   summary: "써브웨이 재고 관리 도움",
  //   tags: ["HTML", "CSS", "JavaScript", "React"],
  //   description: "ㅋㅋ긔",
  //   repoUrl: "https://github.com/sisu-01/subway-label-printer"
  // },
  // {
  //   id: 6,
  //   title: "게임 데브 툴",
  //   summary: "게임 개발 협업 웹서비스",
  //   tags: ["HTML", "CSS", "JavaScript", "Next.js", "MongoDB", ],
  //   description: "ㅋㅋ긔",
  //   repoUrl: "https://github.com/sisu-01/game-dev-coop"
  // },
  // {
  //   id: 7,
  //   title: "도전! 롤든벨",
  //   summary: "리그 오브 레전드 실력 향상 퀴즈",
  //   tags: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Python", "Redis", "Linux", "Docker"],
  //   description: "ㅋㅋ긔",
  //   repoUrl: "https://github.com/sisu-01/lol_nextjs"
  // },
];