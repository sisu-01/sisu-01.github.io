// src/projects.ts
import type { ProjectType } from "./types";

export const PROJECTS: ProjectType[] = [
  {
    title: "PUBG 박격포 계산기",
    subtitle: "박격포 사격제원 산출 자동화 프로그램",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "인게임 지도 이미지 분석과 지형 데이터를 활용해 객체 간 수평 거리 및 고도차를 분석하고, 정밀 타격에 필요한 박격포 사격 제원을 자동으로 산출하는 프로그램",
    icon: ["fas", "bomb"],
    isMain: true,
    techStack: [
      {
        type: "백엔드",
        tags: ["Python", "OpenCV", "UnrealEngine"],
        contents: [
          {
            features: "언리얼 엔진 바이너리 데이터 파싱",
            description: "PUBG 맵 지형 데이터(heightmap)을 얻기 위해 언리얼 엔진 패키지의 메타데이터를 분석하여 파일을 추출"
          },
          {
            features: "OpenCV 활용 객체 탐지",
            description: "플레이어의 색상 기반 이진화 마스킹 후 탬플릿 이미지 매치, 이미지 비율 검증을 통해 객체 탐지"
          },
        ]
      }
    ],
    etc: "Ai의 도움을 많이 받은 프로젝트였다.\n" + 
        "하지만 Ai는 결국 도구일 뿐, 개발의 방향성과 아이디어같은 설계 능력은 개발자의 몫임을 느꼈다.\n\n" +
        "Ai가 해준 것들\n" + 
        "1. PUBG 인게임 박격포 탄속 역산하기\n2. 수평 거리와 고도차를 고려한 탄도학 공식 만들기\n3. OpenCV 기능 도움",
    repoUrl: "https://github.com/sisu-01/pubg-mortar-calc"
  },
  {
    title: "포트폴리오",
    subtitle: "프로젝트 정리 웹사이트",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "지금까지 진행했던 프로젝트들을 보기 좋게 나열한 사이트",
    icon: ["fas", "code"],
    isMain: false,
    techStack: [
      {
        type: "프론트엔드",
        tags: [/*"HTML", "CSS", */"Vite", "React", "TypeScript"],
        contents: []
      },
      {
        type: "인프라",
        tags: ["GithubPages"],
        contents: []
      }
    ],
    etc: "",
    repoUrl: "https://github.com/sisu-01/sisu-01.github.io"
  },
  {
    title: "FineVu 시간 편집기",
    subtitle: "블랙박스 녹화 영상 편집 프로그램",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "안전신문고에 블랙박스 영상 제출할 때, 영상 속 녹화 시간이 신고 시간과 다르면 신고가 접수되지 않아 제작한 프로그램",
    icon: ["fas", "video"],
    isMain: false,
    techStack: [
      // {
      //   type: "백엔드",
      //   tags: ["Python"],
      //   contents: [
      //     {
      //       features: "Python을 활용한 시간 설정 후처리",
      //       description: "블랙박스 영상 속 시간과 신고 시간이 다르면 신고 안 받아줌.. 그래서 Python movie.py로 영상 속 시간 부분을 내 마음대로 편집해주는 읏"
      //     }
      //   ]
      // }
    ],
    etc: "100% Ai 제작",
    repoUrl: "https://github.com/sisu-01/FineVu_TimeEditor"
  },
  {
    title: "노래방 유튜브 업로더",
    subtitle: "TJ 미디어 녹음 파일 유튜브 업로더",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "오디오 파일명 ID 기반의 곡 정보 스크래핑, 비디오 인코딩 및 유튜브 업로드 자동화 프로그램",
    icon: ["fas", "microphone-lines"],
    isMain: false,
    techStack: [
      // {
      //   type: "백엔드",
      //   tags: ["Python"],
      //   contents: [
      //     {
      //       features: "Python을 활용한 mp3 파일 처리 및 유튜브 업로드 자동화",
      //       description: "moviePy랑 google 어쩌구 해서 연동 큭큭"
      //     }
      //   ]
      // }
    ],
    etc: "100% Ai 제작",
    repoUrl: "https://github.com/sisu-01/TJ_Youtube_uploader"
  },
  {
    title: "도전! 롤든벨",
    subtitle: "리그 오브 레전드 실력 향상 퀴즈",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "Google Adsense, H5 Game Adsense, SEO 최적화를 통해 수익 창출을 목표로 하는 완성된 웹 서비스 운영 프로젝트",
    icon: ["fas", "gamepad"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: [/*"HTML", "CSS", */"TypeScript", "React", "Next.js"],
        contents: [
          {
            features: "TypeScript 도입",
            description: "안정성 및 개발 유지보수 편이성을 위해 TypeScript를 도입했다. 결과는 놀라웠다. 왜 이제야 도입했나 싶을 정도로 개발이 편해졌다. Typescript가 대세인 이유가 있다."
          },
          {
            features: "useReducer를 활용한 상태 관리",
            description: "기존엔 useState로만 상태 관리를 했다가 useReducer의 존재를 알게되어 리팩토링을 했는데 정말 놀라웠다. 모든 상태 관리를 최상위에서 useReducer 하나로 관리하니 상태가 한눈에 들어오고, 상태 변경 로직도 한 곳에 모여있어서 유지보수가 정말 편해졌다. 상태가 복잡해질수록 useReducer의 진가가 발휘된다고 생각한다."
          },
        ]
      },
      {
        type: "백엔드",
        tags: ["Python", "Flask", "Redis"],
        contents: [
          {
            features: "Redis 도입",
            description: "매치업 데이터는 영구 저장해야될 만큼 중요하지도 않고 빠르고 자주 불러와야 하니 메모리 기반의 Redis를 도입해서 빠르게 불러올 수 있도록 했다. 결과는 놀라웠다. 매치업 데이터 불러오는 속도가 엄청 빨라졌다. Redis는 정말 빠르다."
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
            description: "지금까지는 기관에서 SSL 인증서를 구입해서 사용했음. 하지만 이걸 알고 Let's Encrypt를 활용하여 무료 SSL 인증서를 자동으로 발급하고 갱신할 수 있도록 구현했습니다. 이 과정에서 CloudFlare DNS API를 활용"
          },
          {
            features: "Google Adsense 승인",
            description: "Google Adsense 승인을 위해 웹사이트의 보안 및 콘텐츠 품질을 개선하여 광고 수익화를 가능하게 했습니다."
          }
        ]
      }
    ],
    etc: "생성형 Ai 덕분에 디자이너 없이 고퀄리티의 이미지 소스로 제작 할 수 있었다.\n\n사용자들은 글을 잘 읽지 않는다. 설명글보다 명확한 UX가 중요하다는 것을 느꼈다.",
    repoUrl: "https://github.com/sisu-01/lol_nextjs"
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
        tags: [/*"HTML", "CSS", */"JavaScript", "Next.js"],
        contents: [
          {
            features: "Drag & Drop을 활용한 직관적인 UI 구현",
            description: "dnd-kit 라이브러리를 활용하여 대시보드 및 칸반보드를 구현."
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
    etc: "처음으로 팀 프로젝트를 해봤는데, 기획자가 고안한 기능과 레이아웃만 보고 개발하면서 보완 사항 건의하고 추가하는 이 흐름이 참 좋았다. 구상은 기획자에게 맡기고 안 하고 개발에만 집중하니까 개발 속도가 빠름을 느꼈다.",
    repoUrl: "https://github.com/sisu-01/game-dev-coop"
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
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: [/*"HTML", "CSS", */"JavaScript", "React"],
        contents: [
          {
            features: "재고 관리용 라벨 프린터 웹 애플리케이션 개발",
            description: "매장에서 기존에 사용하던 라벨 프린팅 시스템은 일일히 정보 기입, but 내가 개발한 것은 정보가 자동으로 기입, print() 활용하여 버튼 클릭 몇 번 만으로 라벨이 프린팅 됨"
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
    title: "카연갤 북마크",
    subtitle: "아마추어 웹툰 플랫폼",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "무분별한 만화들을 수집 및 가공하여 보기 편하게 만들고 시리즈화 하는 웹서비스",
    icon: ["fas", "book-bookmark"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: [/*"HTML", "CSS", */"JavaScript", "React", "Next.js"],
        contents: [
          {
            features: "SEO 최적화를 위한 React -> Next.js 마이그레이션",
            description: "의도했던 SEO 및 공유 opengraph 기능을 React에서는 구현이 불간으하여 Next.js로 마이그레이션하여 구현했습니다."
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
        tags: [/*"HTML", "CSS", */"JavaScript"],
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
        tags: [/*"HTML", "CSS", */"JavaScript"],
        contents: [
          {
            features: "관리자 페이지 대시보드 구현",
            description: "chart-js 라이브러리를 활용하여 에이전트 현황 및 서버 상태를 시각화했습니다."
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
        tags: [/*"HTML", "CSS", */"JavaScript"],
        contents: [
          {
            features: "키보드 대신 마우스로 입력하는 가상 키패드 구현",
            description: "키보드 입력이 필요한 상황에서 마우스로 클릭하여 입력하는 가상 키패드를 구현했습니다. 이를 통해 키로거로부터 사용자의 입력을 보호할 수 있습니다."
          },
          {
            features: "반응형 디자인 적용",
            description: "다양한 화면 크기에서 원활하게 작동하도록 반응형 디자인을 적용하여, 데스크톱과 모바일 환경 모두에서 최적의 사용자 경험을 제공합니다."
          },
          {
            features: "입력 데이터 암호화",
            description: "아스키값을 뒤섞어 메모리단에서 비밀번호가 노출되는 것을 방지합니다."
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
  }
];