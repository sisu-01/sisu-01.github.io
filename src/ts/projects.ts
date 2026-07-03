// src/projects.ts
import type { ProjectType } from "./types";

export const PROJECTS: ProjectType[] = [
  {
    title: "PUBG 박격포 계산기",
    subtitle: "박격포 사격제원 산출 자동화 프로그램",
    images: [
      "/projects/pubg_mortar/thumbnail.png",
      "/projects/pubg_mortar/explain.png",
      "/projects/pubg_mortar/heightmap.png",
      "/projects/pubg_mortar/threejs.png",
      "/projects/pubg_mortar/final.png",
      // 죽이는 움짤?
    ],
    summary: "인게임 지도 이미지 분석과 지형 데이터를 활용해 객체 간 수평 거리 및 고도차를 분석하고, 정밀 타격에 필요한 박격포 사격 제원을 자동으로 산출하는 프로그램",
    icon: ["fas", "bomb"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: [],
        contents: [
          {
            features: "TTS 활용 사격 제원 음성 알림",
            description: "안티치트 충돌 방지를 위해 음성을 통하여 플레이어에게 정보 제공"
          }
        ]
      },
      {
        type: "백엔드",
        tags: ["Python", "OpenCV", "UnrealEngine"],
        contents: [
          {
            features: "언리얼 엔진 바이너리 데이터 파싱",
            description: "PUBG 맵 지형 데이터(heightmap)을 얻기 위해 언리얼 엔진 패키지의 메타데이터를 분석하여 파일을 추출"
          },
          {
            features: "분할된 이미지들 자동 병합",
            description: "조각나있는 16비트 지형 데이터를 자동으로 순서에 맞게 병합하여 개발 시간 단축"
          },
          {
            features: "OpenCV 활용 객체 탐지",
            description: "플레이어의 색상 기반 이진화 마스킹 후 탬플릿 이미지 매치, 이미지 비율 검증을 통해 객체 탐지"
          },
        ]
      }
    ],
    etc: "85% 정도 바이브 코딩으로 진행한 프로젝트이다.\n" + 
        "하지만 Ai는 결국 도구일 뿐, 개발의 방향성과 아이디어 구상 같은 설계 능력은 개발자의 몫임을 느꼈다.\n\n" +
        "Ai를 활용하여 개발한 주요 기능 목록\n" + 
        "1. PUBG 인게임 박격포 탄속 역산하기\n"+
        "2. 수평 거리와 고도차를 고려한 탄도학 공식 만들기\n"+
        "3. 바이너리 데이터 이미지 변환 및 병합 자동화\n"+
        "4. OpenCV 기능 도움\n"+
        "5. 지형 데이터 시각화를 위한 three.js 구현",
    repoUrl: "https://github.com/sisu-01/pubg-mortar-calc"
  },
  {
    title: "포트폴리오",
    subtitle: "프로젝트 정리 웹사이트",
    images: [
      "/portfolio/pc사진",
      "/portfolio/모바일",
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
      "/finevu/경찰 >:( 비포",
      "/finevu/경찰 ^^ 에프터 ㄱㄱ",
    ],
    summary: "안전신문고에 블랙박스 영상 제출 시, 영상 속 녹화 시간과 신고 시간이 달라 접수가 반려되어 제작한 프로그램",
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
    etc: "바이브 코딩",
    repoUrl: "https://github.com/sisu-01/FineVu_TimeEditor"
  },
  {
    title: "노래방 유튜브 업로더",
    subtitle: "TJ 미디어 녹음 파일 유튜브 업로더",
    images: [
      "/tj/.mp3 파일목록 -> 영상화",
    ],
    summary: "곡 정보 스크래핑, 비디오 인코딩 및 유튜브 업로드 자동화 프로그램",
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
    etc: "바이브 코딩",
    repoUrl: "https://github.com/sisu-01/TJ_Youtube_uploader"
  },
  {
    title: "도전! 롤든벨",
    subtitle: "리그 오브 레전드 실력 향상 퀴즈",
    images: [
      "/lol_updown/첫화면",
      "lol_updown/게임화면",
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
            description: "안정성과 생산성의 향상 및 유지보수를 위해 TypeScript 첫 도입"
          },
          {
            features: "useReducer를 활용한 상태 관리",
            description: "useState로는 감당하기 어려운 복잡한 상태 관리를 위해 useReducer 도입하여 개발 편이성 및 유지보수성 향상"
          },
        ]
      },
      {
        type: "백엔드",
        tags: ["Python", "Flask", "Redis"],
        contents: [
          {
            features: "Redis 도입",
            description: "중요도가 낮고, 빠른 읽기/쓰기가 필요한 데이터를 위해 Redis를 도입하여 성능 향상"
          },
          {
            features: "Python을 활용한 데이터 수집 및 처리",
            description: "Python으로 OP.GG 정보 갱신에 맞춰 스크래핑 및 Redis에 저장하는 파이프라인 구현"
          },
          {
            features: "Flask API 개발",
            description: "Flask를 활용하여 프론트엔드에서 요청하는 매치업 데이터에 대한 API를 개발하여, 프론트엔드와 백엔드 간의 원활한 데이터 통신을 구현했습니다."
          }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "Docker", "CloudFlare", "Let's Encrypt"],
        contents: [
          {
            features: "Let's Encrypt SSL 자동 인증",
            description: "dns-01 인증 방식을 사용하기 위해 CloudFlare DNS API를 활용하여 자동 인증 구현"
          },
          {
            features: "Google Adsense 승인",
            description: "승인을 위해 웹사이트의 보안 및 콘텐츠 품질을 개선하여 수익 창출 기반 마련"
          }
        ]
      }
    ],
    etc:
    "스크래핑과 API 서버를 하나의 App에서 관리하기 위해 Flask를 도입했지만,\n~~한 이유로 불가능하다는 것을 알게됐다.\n\n"+
    "상업용 웹이 아니면 80번 포트가 막혀있어 http-01 방식의 let's encrypt를 사용할 수 없다.\n\n"+
    "사용자들은 글을 잘 읽지 않는다. 설명글보다 명확한 UX가 중요하다는 것을 느꼈다.",
    repoUrl: "https://github.com/sisu-01/lol_nextjs",
    serviceUrl: "https://www.lol-updown.com/"
  },
  {
    title: "Game Dev Coop",
    subtitle: "게임 개발 협업 웹서비스",
    images: [
      "/game_dev_tool/메인 화면",
      "/game_dev_tool/칸반",
      "/game_dev_tool/dnd",
      "/game_dev_tool/대충 아무 팝업설정화면",
    ],
    summary: "Jira의 불필요한 기능은 덜어내고 게임 개발에 특화된 기능들을 추가하여, 게임 개발자들이 협업에만 집중할 수 있도록 도와주는 웹서비스",
    icon: ["fas", "calendar-days"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: [/*"HTML", "CSS", */"JavaScript", "Next.js"],
        contents: [
          {
            features: "Drag & Drop UI 구현",
            description: "dnd-kit 라이브러리를 활용하여 대시보드 및 칸반보드를 구현"
          }
        ]
      },
      {
        type: "백엔드",
        tags: ["MongoDB"],
        contents: [
          {
            features: "구글 로그인 연동",
            description: "OAuth 2.0을 활용하여 구글 계정으로 로그인 기능 구현"
          }
        ]
      },
      {type: "인프라", tags: ["Vercel"], contents: []}
    ],
    etc:
    "첫 팀 프로젝트를 통해 기획자와 디자이너와의 협업을 경험했다.\n"+
    "기획자가 제시한 설계안과 디자이너의 시안을 참고하여 개발에만 집중할 수 있었고, 개발 과정에서 느낀 개선 사항을 기획자에게 피드백했다.\n"+
    "협업을 통해 분담의 효율성과 소통의 중요성을 느꼈다.",
    repoUrl: "https://github.com/sisu-01/game-dev-coop",
    serviceUrl: "https://game-dev-coop.vercel.app"
  },
  {
    title: "써브웨이 라벨 프린터",
    subtitle: "재고 관리용 라벨 출력 웹 애플리케이션",
    images: [
      "/test/1.png",
      "/test/2.gif",
      "/test/3.png",
    ],
    summary: "써브웨이에서 기존에 사용하던 비효율적인 라벨 프린팅 방식을 원클릭 버튼 형태로 개선한 웹 애플리케이션",
    icon: ["fas", "print"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: [/*"HTML", "CSS", */"JavaScript", "React"],
        contents: [
          {
            features: "단일 HTML 구조",
            description: "비개발자의 유지보수 편의를 위해 CDN 기반 단일 HTML로 React 앱 구현"
          },
          {
            features: "비전공자를 위한 구조 설계",
            description: "편리한 메뉴 수정을 위해 메뉴 데이터를 독립적인 외부 .js 파일로 분리"
          }
        ]
      }
    ],
    etc:
    "회사 업무 외에, 개인적으로 기획·개발하여 실제 현장에 도입되고 수익을 가져다준 프로젝트다.\n"+
    "현재까지도 써브웨이에서 내가 만든 애플레케이션이 사용되고 있을 것이다.\n\n"+
    "기술적으로 어렵지 않고 작은 프로젝트였지만, 위와 같은 이유로 메인 프로젝트로 분류해놨다.",
    repoUrl: "https://github.com/sisu-01/subway-label-printer",
    serviceUrl: "https://subway-label-printer.vercel.app/"
  },
  {
    title: "카연갤 북마크",
    subtitle: "만화 필터링·클러스터링 웹 서비스",
    images: [
      "/cartoon_bookmark/화면들...",
      // ...
      "/cartoon_bookmark/그래픽 차트 시각화",
    ],
    summary: "디시인사이드 카툰-연재 갤러리의 게시글을 수집 및 가공하여 보기 편하게 만들고 손쉽게 공유 가능한 웹 서비스",
    icon: ["fas", "book-bookmark"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: [/*"HTML", "CSS", */"JavaScript", "React", "Next.js"],
        contents: [
          {
            features: "React -> Next.js 마이그레이션",
            description: "SNS 공유 시 만화별 동적 OpenGraph 적용을 위해 CSR(React) 구조에서 SSR(Next.js) 기반으로 마이그레이션"
            
          }
        ]
      },
      {
        type: "백엔드",
        tags: ["Python", "MongoDB"],
        contents: [
          {
            features: "전처리 -> 벡터화 -> 군집화",
            description: "수집한 만화 정보를 전처리(MeCab), 벡터화(TF-IDF) 및 군집화(DBSCAN) 하여 만화들을 시리즈별로 분류"
          },
          {
            features: "MongoDB를 활용한 데이터 저장",
            description: "다양한 경험을 위해 RDBMS에서 벗어나 NoSQL 경험 및 Mongo Atlas의 무료 플랜을 활용하여 DB 구축"
          }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "Docker", "Vercel"],
        contents: [
          {
            features: "Docker 배포 환경 구축",
            description: "Docker 컨테이너를 활용하여 배포 편이성 향상 및 환경 일관성 유지"
          },
          {
            features: "Vercel 배포",
            description: "GitHub 연동 자동 배포 설정을 통해 개발 편이성 향상 및 무료 호스팅 활용"
          }
        ]
      }
    ],
    etc:
    "처음으로 JS 라이브러리(React, Next.js)를 사용해봤는데 놀라운 개발 편의성에 감탄했다.\n내가 지금까지 사용했던 Django나 Spring과 비교해서 쉽고, 빠르고, 자유로운 개발 경험을 제공했다.\n\n"+
    "현재 나의 군집화 알고리즘은 제목의 맥락을 이해하지 못해 전혀 다른 만화라도 비슷한 제목이면 같은 시리즈로 분류하는 버그가 있다.\n"+
    "기회가 된다면 군집화 알고리즘을 개선하여 더 정확한 시리즈 분류 기능을 완성하고싶다.",
    repoUrl: "https://github.com/sisu-01/cartoon_nextjs",
    serviceUrl: "https://cartoon-nextjs.vercel.app/"
  },
  {
    title: "SISU",
    subtitle: "Django 활용 개인 블로그",
    images: [
      "/sisu/메인화면",
    ],
    summary: "요약입니두~",
    icon: ["fas", "newspaper"],
    isMain: false,
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
          // {
          //   features: "Django 프레임워크를 활용한 웹 애플리케이션 개발",
          //   description: "Django의 MTV 아키텍처를 활용하여 모델, 템플릿, 뷰를 구성하여 개인 블로그 웹사이트를 개발했습니다."
          // }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "Nginx", "Docker"],
        contents: [
          // {
          //   features: "Docker를 활용한 배포 환경 구축",
          //   description: "Docker 컨테이너를 사용하여 애플리케이션의 배포 환경을 일관되게 유지하고, 버전 관리 및 배포의 효율성을 높였습니다."
          // }
        ]
      }
    ],
    etc:
    "Django는 여러 기능들이 기본으로 내장돼있고, 심지어 관리자 페이지까지 제공된다.\n"+
    "또한 이전까지는 sql문을 직접 작성했지만 처음으로 orm을 사용해보면서 빠른 개발 속도를 경험했다.",
    repoUrl: "https://github.com/sisu-01/sisu2"
  },
  {
    title: "PowerWinup",
    subtitle: "대규모 에이전트 중앙 관리 솔루션",
    images: [
      "/powerwinup/pdf 에 있는거 그거라도..",
    ],
    summary: "기업들의 직원 PC의 윈도우 업데이트를 자동으로 관리하고 업데이트 실패 시 원격으로 문제를 해결할 수 있도록 도와주는 솔루션",
    icon: ["fab", "windows"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: [/*"HTML", "CSS", */"JavaScript"],
        contents: [
          {
            features: "관리자 페이지 대시보드 구현",
            description: "chart-js 라이브러리를 활용하여 에이전트 현황 및 서버 상태를 시각화"
          }
        ]
      },
      {
        type: "백엔드",
        tags: ["Java", "Spring", "WebSocket", "MariaDB"],
        contents: [
          {
            features: "WebSocket 활용 실시간 통신 구현",
            description: "에이전트 개발자와 협업하여 실시간 통신, 명령어 전송 및 상태 업데이트 기능 구현"
          }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "ApacheTomcat"],
        contents: [
          {
            features: "네트워크 환경 구성",
            description: "고객사의 유지보수 팀과 협업하여 네트워크 오류 해결 및 안정성 향상"
          }
        ]
      }
    ],
    etc: "GS 인증 획득 과정을 통해 피드백 및 개선을 반복하여 제품의 완성도를 높일 수 있었다.\n\n내가 만든 프로그램이 전국의 다양한 기업들에서 실제로 사용된다는 사실에 매우 기쁘고 큰 보람을 느꼈다.",
  },
  {
    title: "V-pad",
    subtitle: "키로거 방지 보안 가상 키패드",
    images: [
      "/vpad/pc 화면",
      "/vpad/모바일 화면",
      "/vpad/pdf 그거?"
    ],
    summary: "키보드 해킹(키로거)을 방지하기 위해 마우스 입력 기반의 가상 키패드를 제공하고, 클라이언트-서버 간 구간 암호화를 통해 입력 데이터를 안전하게 보호하는 보안 솔루션",
    icon: ["fas", "keyboard"],
    isMain: true,
    techStack: [
      {
        type: "프론트엔드",
        tags: [/*"HTML", "CSS", */"JavaScript", "jQuery"],
        contents: [
          {
            features: "가상 키패드 UI 및 로직 구현",
            description: "마우스로 클릭하여 입력하는 가상 키패드를 구현"
          },
          // {
          //   features: "반응형 레이아웃 적용",
          //   description: "다양한 크기의 모바일 화면에서도 동작하는 반응형 디자인을 적용"
          // },
          {
            features: "입력 데이터 암호화",
            description: "아스키값을 뒤섞어 메모리단에서 비밀번호가 노출되는 것을 방지"
          }
        ]
      },
      {
        type: "백엔드",
        tags: ["Node.js", "Express"],
        contents: [
          {
            features: "AES 대칭키 암호화 적용",
            description: "CryptoJS 라이브러리를 활용하여 AES 대칭키 암호화 적용"
          },
          {
            features: "암·복호화 api 구현",
            description: "클라이언트용 암호화, 서버용 복호화 API 구현"
          },
          // {
          //   features: "server to server",
          //   description: "복호화 서버와 통신하여 비밀번호를 복호화 한 후 로그인 인증"
          // }
        ]
      },
      {
        type: "인프라",
        tags: ["Linux", "Apache"],
        contents: [
          {
            features: "다양한 서비스 환경 경험",
            description: "고객사들의 다양한 운영 환경을 접하며 네트워크 및 서버를 이해"
          },
          {
            features: "Reverse Proxy 설정",
            description: "리버스 프록시를 통해 보안 강화 및 트래픽 관리 구현"
          }
        ]
      }
    ],
    etc:
    "내가 입사하여 처음으로 맡았던 프로젝트였다.\n"+
    "이론만 알던 초짜 개발자였던 나는 프로젝트 완성을 위해 신나게 구르면서 어엿한 개발자로 급성장 할 수 있었다.",
  }
];