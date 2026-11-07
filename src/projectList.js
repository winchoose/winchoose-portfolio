export const projectList = [
  {
    id: "buddys",
    name: "Buddys",
    period: "", // 프로젝트 기간
    role: "", // 맡은 역할
    // 기여 항목별 제목(title)과 설명 목록(items)을 작성합니다.
    contributions: [
      {
        title: "운영 환경 이해를 위한 EC2/Docker 기반 배포 자동화",
        items: [
          "관리형 배포 환경에 의존하지 않고 서비스가 실제 서버에서 실행되는 흐름을 이해하고자 AWS EC2와 Docker 기반 배포 환경을 직접 구성했습니다.",
          "GitHub Actions로 배포를 자동화하고, 서버 연결 오류를 해결하며 컨테이너 재생성 오류에 대응하도록 스크립트를 보완했습니다."
        ]
      },
      {
        title: "Vaul 검색창 포커스 오류 해결",
        items: [
          "검색창 입력을 막는 오류를 추적해 Vaul의 모달 속성이 내부 컴포넌트에 전달되지 않는 원인을 찾았습니다.",
          "속성 전달 누락을 패치하고, 데스크톱과 모바일에서 검색창 입력과 시트 동작을 검증했습니다."
        ]
      }
    ],
    description: "취향에 맞는 교환학생 동행을 찾고, 함께한 코스를 기록하는 서비스입니다.",
    image: "/images/projects/buddys-cover.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query"],
    repositoryUrl: "https://github.com/TEAM-BUDDYS/BUDDYS-CLIENT",
    siteUrl: "https://buddys.co.kr",
  },
  {
    id: "setup-automation-agent",
    name: "초기 세팅 자동화 에이전트",
    period: "",
    role: "",
    contributions: [
      {
        title: "단계별 워크플로우로 초기 세팅을 수행하는 자동화 에이전트 설계",
        items: [
          "프론트엔드 초기 세팅을 .init-agent 명세와 tools/init-agent 실행 하네스로 분리해 자동화했습니다.",
          "React/Vite, ESLint/Prettier, CI/CD, 라우터/alias, TanStack Query, HTTP client, SVGR, 디자인 시스템 세팅을 11개 단계 YAML로 구조화했습니다.",
          "GitHub API를 활용해 각 단계를 Issue → Branch → Commit → PR → Merge 단위로 실행하고 state.yaml로 진행 상태와 실패 재시도 흐름을 관리했습니다.",
          "수동으로 약 2시간 30분 걸리던 React 기반 프론트엔드 초기 세팅을 11개 단계 YAML과 실행 하네스로 자동화해 GitHub Issue/PR/Merge까지 포함한 전체 과정을 약 2분 35초 만에 완료했습니다."
        ]
      }
    ],
    description: "",
    image: "",
    technologies: [],
    repositoryUrl: "",
    siteUrl: "",
    presentationUrl: "https://www.youtube.com/watch?v=U94Hhq6iyik",
    blogUrl: "https://taek2-0310.tistory.com/14",
  },
  {
    id: "open-source",
    name: "오픈소스 기여",
    period: "",
    role: "",
    contributionTitle: "기여한 내용",
    contributions: [],
    description: "",
    image: "",
    technologies: [],
    repositoryUrl: "",
    siteUrl: ""
  },
  {
    id: "passtival",
    name: "Passtival",
    period: "",
    role: "",
    contributionTitle: "담당한 일",
    contributions: [],
    description: "안양대학교 축제의 부스·공연·응모권·분실물 정보를 한곳에서 제공하는 서비스입니다.",
    image: "/images/projects/passtival-cover.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Vanilla Extract"
    ],
    repositoryUrl: "https://github.com/Passtival/passtival-client",
    siteUrl: ""
  },
];
