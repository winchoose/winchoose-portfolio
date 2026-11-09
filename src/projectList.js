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
          "GitHub Actions로 배포를 자동화하고, 서버 연결 오류를 해결하며 컨테이너 재생성 오류에 대응하도록 스크립트를 보완했습니다.",
        ],
        blogUrl: "https://taek2-0310.tistory.com/17",
      },
      {
        title: "바텀시트가 외부 검색창의 포커스를 가로채는 문제 해결",
        items: [
          "바텀시트 내부 탭을 선택한 뒤 외부 검색창을 누르면 포커스가 시트 안으로 돌아가 검색어를 입력할 수 없는 문제가 있었습니다.",
          "Vaul의 modal={false} 설정이 내부 Radix Dialog에 전달되지 않는 원인을 찾아 pnpm 패치로 수정하고 검색창 입력과 기존 모달의 포커스 제한이 정상 동작하는지 검증했습니다.",
        ],
      },
    ],
    description:
      "교환학생이 겪는 네트워킹 고립 문제와 산발적으로 흩어진 정보를 해결하기 위해 교환학생 간 동행 매칭과 정보 탐색을 돕는 서비스입니다.",
    image: "/images/projects/buddys-cover.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
    ],
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
          "수동으로 약 2시간 30분 걸리던 React 기반 프론트엔드 초기 세팅을 11개 단계 YAML과 실행 하네스로 자동화해 GitHub Issue/PR/Merge까지 포함한 전체 과정을 약 2분 35초 만에 완료했습니다.",
        ],
      },
    ],
    description: "",
    image: "",
    technologies: [],
    repositoryUrl: "https://github.com/winchoose/Automated-Testing",
    siteUrl: "",
    presentationTitle: "자동화의 메리트",
    presentationUrl: "https://www.youtube.com/watch?v=U94Hhq6iyik",
    blogTitle: "초기세팅 자동화 에이전트를 만들기 전에 알아야 할 기술 개념들",
    blogUrl: "https://taek2-0310.tistory.com/14",
  },
  {
    id: "open-source",
    name: "오픈소스 기여",
    period: "",
    role: "",
    contributions: [
      {
        title: "HWP 렌더링 엔진 rhwp 오픈소스 버그 분석 및 기여",
        items: [
          "HOP에서 HWP 양식 문서가 손상된 것처럼 보이는 문제를 발견했습니다. 원본 파일과 공유 후 파일의 크기·SHA-256 해시를 비교해 실제 파일 손상이 아니라 렌더링 문제임을 분리했습니다.",
          "upstream rhwp 데모에서도 동일한 레이아웃 깨짐이 재현되는 것을 확인해 문제 범위를 HOP 통합 문제가 아닌 rhwp 렌더러의 표/문단 배치 문제로 좁혔습니다.",
          "rhwp 렌더러에서 연속된 TAC 표 사이의 line segment 간격이 음수로 되감기는 케이스를 추적하고 gap 계산이 0 이상으로 보정되도록 수정했습니다.",
          "수정안·재현 문서·회귀 테스트가 메인터너의 줄 위치 계산 보정과 함께 통합 PR #7110으로 devel에 병합됐으며 원 커밋의 저자와 출처가 보존됐습니다.",
        ],
      },
    ],
    description: "",
    image: "",
    technologies: [],
    repositoryUrl: "",
    siteUrl: "",
    pullRequests: [
      {
        label: "기여 PR #7103",
        url: "https://github.com/edwardkim/rhwp/pull/7103",
      },
      {
        label: "통합·병합 PR #7110",
        url: "https://github.com/edwardkim/rhwp/pull/7110",
      },
    ],
  },
  {
    id: "passtival",
    name: "Passtival",
    period: "",
    role: "",
    contributions: [
      {
        title: "주변의 질문에서 시작한 축제 서비스",
        text: "축제에서 무엇을 파는지 묻는 친구들에게 많은 메뉴와 판매 위치를 일일이 설명하기 어려워, 정보를 모아 볼 수 있는 서비스를 시작했습니다.",
      },
      {
        title: "축제 3일간 운영 결과",
        metrics: [
          {
            label: "총 방문자",
            value: "1만",
            unit: "명",
          },
          {
            label: "페이지뷰",
            value: "10만",
            unit: "회",
          },
          {
            label: "번호팅 신청",
            value: "1,070",
            unit: "명",
          },
          {
            label: "번호팅 매칭",
            value: "441",
            unit: "쌍",
          },
        ],
      },
      {
        title: "맡은 일",
        text: "프론트엔드 개발을 맡아 홈·부스 화면과 공통 시간표를 구현하고, 공연 목록 API 연동과 번호팅 신청 흐름 개선에 기여했습니다.",
      },
    ],
    description:
      "안양대학교 축제의 부스·공연·응모권·분실물 정보를 한곳에서 제공하는 서비스입니다.",
    image: "/images/projects/passtival-cover.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Vanilla Extract",
    ],
    repositoryUrl: "https://github.com/Passtival/passtival-client",
    siteUrl: "",
  },
];
