// src/projects.ts
import type { ProjectType } from "./types";

export const PROJECTS: ProjectType[] = [
  {
    title: "V-pad",
    subtitle: "키로거 방지 보안 가상 키패드",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
      "/test/4.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "keyboard"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: ["HTML", "CSS", "JavaScript"],
        contents: [
          {
            features: "키보드 대신 마우스로 입력하는 가상 키패드 구현",
            description: "키보드 입력이 필요한 상황에서 마우스로 클릭하여 입력하는 가상 키패드를 구현했습니다. 이를 통해 키로거로부터 사용자의 입력을 보호할 수 있습니다.",
          },
          {
            features: "반응형 디자인 적용",
            description: "다양한 화면 크기에서 원활하게 작동하도록 반응형 디자인을 적용하여, 데스크톱과 모바일 환경 모두에서 최적의 사용자 경험을 제공합니다.", 
          },
          {
            features: "입력 데이터 암호화",
            description: "아스키값을 뒤섞어 메모리단에서 비밀번호가 노출되는 것을 방지합니다.",
          }
        ]
      },
      {
        type: "백엔드",
        tags: ["Node.js", "Express"],
        contents: [
          {
            features: "Crypto-JS 라이브러리를 활용한 암호화",
            description: "AES 대칭키 암호화 알고리즘을 사용하여 비밀번호를 암호화합니다."
          },
          {
            features: "ajax 통신으로 비동기 데이터 처리",
            description: "클라이언트가 서버로부터 암호화된 global key를 받아서 비밀번호를 암호화한 뒤, 암호화된 비밀번호를 서버로 전송하여 네트워크 상에서의 보안을 강화합니다."
          },
          {
            features: "server to server",
            description: "서버가 받은 암호화된 비밀번호를 복호화 서버와 통신하여 복호화된 비밀번호를 받아 무결성 검사를 진행합니다."
          }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "Apache"],
        contents: [
          {
            features: "다양한 서비스 환경 경험",
            description: "고객사들마다 다른 다양한 운영 환경에서의 경험을 통해 네트워크 및 서버를 이해하고 문제 해결 능력을 키웠습니다."
          },
          {
            features: "Reverse Proxy 설정",
            description: "리버스 프록시를 통해 클라이언트의 요청을 서버로 전달하고 응답을 클라이언트에게 반환하는 구조를 구현했습니다."
          }
        ]
      }
    ],
    etc: "첫 담당 프로젝트, 이론만 아는 상태로 구르면서 급성장 끼요옷",
    repoUrl: ""
  },
  {
    title: "PowerWinup",
    subtitle: "자산관리 및 윈도우 업데이트 제어",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fab", "windows"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: ["HTML", "CSS", "JavaScript"],
        contents: [
          {
            features: "관리자 페이지 대시보드 구현",
            description: "chart-js 라이브러리를 활용하여 에이전트 현황 및 서버 상태를 시각화했습니다.",
          }
        ]
      },
      {
        type: "백엔드",
        tags: ["Java", "Spring", "WebSocket", "MariaDB"],
        contents: [
          {
            features: "WebSocket을 통한 실시간 데이터 전송",
            description: "관리자 페이지(프론트)에서 버튼을 누르면 WebSocket을 통해 서버로 명령이 전송되고, 서버는 해당 명령을 에이전트로 전달하여 실시간으로 업데이트를 제어할 수 있도록 구현했습니다."
          }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "ApacheTomcat"],
        contents: [
          {
            features: "네트워크 환경 구성",
            description: "각 고객사의 유지보수 팀과 협업하여 저마다 다른 환경에서 발생하는 네트워크적 이슈를 해결하고 제품의 안정성을 높였습니다." 
          }
        ]
      }
    ],
    etc: "GS 인증 획득 과정을 통해 피드백 및 개선을 반복하여 제품의 완성도를 높였습니다.",
    repoUrl: ""
  },
  {
    title: "SISU",
    subtitle: "Django 활용 개인 블로그",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "newspaper"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: ["HTML", "CSS", "JavaScript"],
        contents: []
      },
      {
        type: "백엔드",
        tags: ["Python", "Django", "MariaDB"],
        contents: [
          {
            features: "Django 프레임워크를 활용한 웹 애플리케이션 개발",
            description: "Django의 MTV 아키텍처를 활용하여 모델, 템플릿, 뷰를 구성하여 개인 블로그 웹사이트를 개발했습니다."
          }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "Nginx", "Docker"],
        contents: [
          {
            features: "Docker를 활용한 배포 환경 구축",
            description: "Docker 컨테이너를 사용하여 애플리케이션의 배포 환경을 일관되게 유지하고, 버전 관리 및 배포의 효율성을 높였습니다."
          }
        ]
      }
    ],
    etc: "",
    repoUrl: "https://github.com/sisu-01/sisu2"
  },
  {
    title: "카연갤 북마크",
    subtitle: "무분별한 만화들을 수집 및 가공하여 보기 편하게 만들고 시리즈화 하는 웹서비스",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "book-bookmark"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
        contents: [
          {
            features: "SEO 최적화를 위한 React -> Next.js 마이그레이션",
            description: "의도했던 SEO 및 공유 opengraph 기능을 React에서는 구현이 불간으하여 Next.js로 마이그레이션하여 구현했습니다.",
          }
        ]
      },
      {
        type: "백엔드",
        tags: ["Python", "MongoDB"],
        contents: [
          {
            features: "만화 데이터 수집 및 군집화",
            description: "웹에서 만화 데이터를 수집하고, 만화 제목들을 전처리, 임베딩 및 군집화하여 흩어진 만화들을 시리즈로 묶어 사용자가 보기 편하게 만들었습니다."
          },
          {
            features: "MongoDB를 활용한 데이터 저장",
            description: "수집한 만화 데이터를 MongoDB에 저장하여 빠른 검색과 유연한 데이터 구조를 활용했습니다."
          }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "Docker", "Vercel"],
        contents: [
          {
            features: "Docker를 활용한 배포 환경 구축",
            description: "Docker 컨테이너를 사용하여 애플리케이션의 배포 환경을 일관되게 유지하고, 버전 관리 및 배포의 효율성을 높였습니다."
          },
          {
            features: "Vercel을 통한 프론트엔드 배포",
            description: "Next.js 애플리케이션을 Vercel에 배포하여 빠르고 안정적인 호스팅 환경을 제공했습니다."
          }
        ]
      }
    ],
    etc: "처음으로 JS 라이브러리 사용해봤는데 놀라운 편의성에 감탄했다.",
    repoUrl: "https://github.com/sisu-01/cartoon_nextjs"
  },
  {
    title: "써브웨이 라벨 프린터",
    subtitle: "써브웨이 재고 관리 도움",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "print"],
    isMain: false,
    techStack: [
      {
        type: "프론트엔드",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        contents: [
          {
            features: "재고 관리용 라벨 프린터 웹 애플리케이션 개발",
            description: "기존 라벨 프린팅 시스템은 일일히 정보 기입, but 정보가 자동으로 기입, 버튼 클릭 몇 번 만으로 라벨이 프린팅 읏"
          },
          {
            features: "손 쉬운 유지보수를 위한 싱글 html 파일로 제작",
            description: "내가 알바 그만두면 그거 누가 관리할건데.. 그래서 싱글 html 파일에 React는 CDN으로 불러와서 유지보수 방법 적어놨음"
          }
        ]
      }
    ],
    etc: "내가 주도해서 만들어서 돈 벌어서 아마 지금도 써브웨이 범계점에서 쓰이고있을텐데 기분이 째져~",
    repoUrl: "https://github.com/sisu-01/subway-label-printer"
  },
  {
    title: "게임 개발 협업 툴",
    subtitle: "게임 개발 협업 웹서비스",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "calendar-days"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: ["HTML", "CSS", "JavaScript", "Next.js"],
        contents: [
          {
            features: "Drag & Drop을 활용한 직관적인 UI 구현",
            description: "dnd-kit 라이브러리를 활용하여 대시보드 및 칸반보드를 구현.",
          }
        ]
      },
      {
        type: "백엔드",
        tags: ["MongoDB"],
        contents: [
          {
            features: "구글 로그인 연동",
            description: "OAuth 2.0을 활용하여 구글 로그인 기능을 구현하여 사용자가 별도의 회원가입 없이도 서비스를 이용할 수 있도록 했습니다."
          }
        ]
      },
      {type: "인프라", tags: ["Vercel"], contents: []}
    ],
    etc: "처음으로 팀 프로젝트를 해봤는데, 기획자 만들어준 디자인, 기능만 개발하면서 보완 사항 건의하고 추가하는 이 흐름이 참 좋았다. 기획 안 하고 개발에만 집중하니까 능률 ㅆㅅㅌㅊ?",
    repoUrl: "https://github.com/sisu-01/game-dev-coop"
  },
  {
    title: "도전! 롤든벨",
    subtitle: "리그 오브 레전드 실력 향상 퀴즈",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "gamepad"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: ["HTML", "CSS", "TypeScript", "React", "Next.js"],
        contents: [
          {
            features: "TypeScript 도입",
            description: "다양한 경험을 위해 TypeScript 써봤는데 왜 쓰는지 알겠다. 그냥 안정성이 미쳤음."
          },
          {
            features: "useReducer를 활용한 상태 관리",
            description: "원래 useState만 쓰다가 useReducer 써봤는데 개꿀 컄ㅋ 중앙에서 관리하는 편리 및 안정성 견고함"
          },
        ]
      },
      {
        type: "백엔드",
        tags: ["Python", "Flask", "Redis"],
        contents: [
          {
            features: "Redis 도입",
            description: "다양한 경험을 위해 Redis 도입, 저장 필요 없는 매치업 데이터 보관 용이하고 불러오기도 빨라서 좋다."
          },
          {
            features: "Python을 활용한 데이터 수집 및 처리",
            description: "Python으로 OP.GG 크롤링 정보 가공 및 Redis에 저장하는 백엔드 구현"
          },
          {
            features: "Flask 프레임워크를 활용한 API 개발",
            description: "Flask를 활용하여 프론트엔드에서 요청하는 매치업 데이터에 대한 API를 개발하여, 프론트엔드와 백엔드 간의 원활한 데이터 통신을 구현했습니다."
          }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "Docker"],
        contents: [
          {
            features: "무료 SSL 인증서 자동 인증",
            description: "Let's Encrypt를 활용하여 무료 SSL 인증서를 자동으로 발급하고 갱신할 수 있도록 구현했습니다. 이 과정에서 CloudFlare DNS API를 활용"
          },
          {
            features: "Google Adsense 승인",
            description: "Google Adsense 승인을 위해 웹사이트의 보안 및 콘텐츠 품질을 개선하여 광고 수익화를 가능하게 했습니다."
          }
        ]
      }
    ],
    etc: "ai 이미지 개꿀 컄ㅋㅋ 디자이너 필요 없쥬? 근데 실패 ㅠㅠ 이유: 남자 놈들 타겟 게임 사이트 이런거 관심도 없다 이거야",
    repoUrl: "https://github.com/sisu-01/lol_nextjs"
  },
  {
    title: "TJ 미디어 코인 노래방 노래 유튜브 자동 업로드",
    subtitle: "mp3 노래들을 한대 묶어서 영상화 하고 유튜브에 자동으로 업로드해줍니다.",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "microphone-lines"],
    isMain: false,
    techStack: [
      {
        type: "백엔드",
        tags: ["Python"],
        contents: [
          {
            features: "Python을 활용한 mp3 파일 처리 및 유튜브 업로드 자동화",
            description: "moviePy랑 google 어쩌구 해서 연동 큭큭"
          }
        ]
      }
    ],
    etc: "",
    repoUrl: "https://github.com/sisu-01/TJ_Youtube_uploader"
  },
  {
    title: "블랙박스 시간 설정 후처리",
    subtitle: "블랙박스 영상의 시간 설정을 편하게 해주는 파이썬 앱",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "video"],
    isMain: false,
    techStack: [
      {
        type: "백엔드",
        tags: ["Python"],
        contents: [
          {
            features: "Python을 활용한 시간 설정 후처리",
            description: "블박 영상 속 시간과 신고 시간이 다르면 신고 안 받아줌.. 그래서 Python movie.py로 영상 속 시간 부분을 내 마음대로 편집해주는 읏"
          }
        ]
      }
    ],
    etc: "",
    repoUrl: "https://github.com/sisu-01/FineVu_TimeEditor"
  },
  {
    title: "개인 포트폴리오 웹사이트",
    subtitle: "개인 포트폴리오 웹사이트",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "code"],
    isMain: false,
    techStack: [
      {
        type: "프론트엔드",
        tags: ["HTML", "CSS", "TypeScript", "React", "Vite"],
        contents: [
          {
            features: "Vite로 React 프로젝트 설정",
            description: "Vite를 사용하여 React 프로젝트를 설정하여 빠른 개발 환경을 구축했습니다."
          }
        ]
      }
    ],
    etc: "",
    repoUrl: "https://github.com/sisu-01/sisu-01.github.io"
  },
  {
    title: "PUBG 박격포 계산기",
    subtitle: "초정밀 사격제원 산출 자동화 프로그램",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "요약입니두~",
    icon: ["fas", "bomb"],
    isMain: true,
    techStack: [
      {
        type: "백엔드",
        tags: ["Python"],
        contents: [
          {
            features: "언리얼 엔진 소스 역설계",
            description: "맵의 고도 데이터(heightmap)파일 얻으려고 Python으로 소스 여차저차 뜯기"
          },
          {
            features: "OpenCV 활용 객체 탐지",
            description: "플레이어의 색상을 마스크로 한정한 뒤 탬플릿 이미지를 통해 정확히 탐지"
          },
        ]
      }
    ],
    etc: "내게 부족한 수학적 지식이나 알고리즘을 Ai가 도와줬다.\nAi의 강력함 느낌",
    repoUrl: "https://github.com/sisu-01/pubg-mortar-calc"
  }
];