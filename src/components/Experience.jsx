import styled from "styled-components";

const experiences = [
  {
    name: "SOPT 38기",
    description: "대학생 연합 IT 벤처 창업 동아리 SOPT 38기 웹파트를 수료했습니다.",
    activities: ["38기 앱잼 APPJAM", "SOPT 해커톤 SOPKATHON"],
  },
  {
    name: "구름톤 유니브 4기",
    description: "Kakao × Goorm 구름톤 유니브 4기 프론트엔드 파트를 수료했습니다.",
    activities: ["2025 kakao X goorm 시즌톤", "경인/경기북부 지부 해커톤 9ITHON"],
  },
  {
    name: "UMC 10기",
    description: "UMC 안양대학교 프론트엔드 파트를 수료했습니다.",
    activities: [],
  },
  {
    name: "Hult Prize Korea",
    description: "UN과 협력하는 글로벌 사회혁신 창업 대회입니다.",
    activities: [],
    url: "https://www.hultprize.org/",
  },
];

const Main = styled.section`
  width: min(100% - var(--page-gutter), 1280px);
  margin-inline: auto;
  padding-block: 100px;

  .experience-heading {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .experience-label {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;

    span {
      color: var(--blue);
      font-variant-numeric: tabular-nums;
    }
  }

  h2 {
    margin: 0;
    font-size: 42px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -2px;

    span {
      color: var(--blue);
    }
  }

  .experience-list {
    margin: 40px 0 0;
    padding: 0;
    list-style: none;

    > li {
      display: grid;
      grid-template-columns: 240px minmax(0, 1fr);
      align-items: start;
      gap: 48px;
      padding-block: 32px;
    }

    > li + li {
      border-top: 1px solid #e9edf2;
    }
  }

  h3 {
    margin: 0;
    font-size: 22px;
    font-weight: 650;
    line-height: 1.5;
    letter-spacing: -0.6px;

    a {
      display: inline-flex;
      align-items: baseline;
      gap: 10px;
      max-width: 100%;

      &:hover {
        color: var(--blue);
      }

      span:last-child {
        flex-shrink: 0;
        color: var(--blue);
        font-size: 16px;
      }
    }
  }

  .experience-description {
    color: #454f5d;
    font-size: 16px;
    line-height: 1.8;
    letter-spacing: -0.3px;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  .experience-activities {
    margin: 12px 0 0;
    padding-left: 18px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.8;
    word-break: keep-all;
    overflow-wrap: anywhere;

    li::marker {
      color: var(--blue);
    }

    li + li {
      margin-top: 4px;
    }
  }

  @media (max-width: 900px) {
    padding-block: 80px;

    .experience-list > li {
      grid-template-columns: 200px minmax(0, 1fr);
      gap: 28px;
    }
  }

  @media (max-width: 700px) {
    .experience-list > li {
      grid-template-columns: minmax(0, 1fr);
      gap: 12px;
    }
  }

  @media (max-width: 600px) {
    padding-block: 64px;

    .experience-heading {
      gap: 16px;
    }

    .experience-label {
      font-size: 10px;
    }

    .experience-list {
      margin-top: 28px;
    }

    h2 {
      font-size: 34px;
    }

    h3 {
      font-size: 20px;
    }

    .experience-description {
      font-size: 15px;
    }
  }
`;

function Experience() {
  return (
    <Main id="experience" aria-labelledby="experience-title">
      <header className="experience-heading">
        <p className="experience-label"><span>03</span>EXPERIENCE</p>
        <h2 id="experience-title">경험<span aria-hidden="true">.</span></h2>
      </header>
      <ul className="experience-list">
        {experiences.map(({ name, description, activities, url }) => (
          <li key={name}>
            <h3>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} 공식 사이트 (새 탭에서 열림)`}>
                  <span>{name}</span><span aria-hidden="true">↗</span>
                </a>
              ) : name}
            </h3>
            <div>
              <p className="experience-description">{description}</p>
              {activities.length > 0 && (
                <ul className="experience-activities">
                  {activities.map((activity) => <li key={activity}>{activity}</li>)}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Main>
  );
}

export default Experience;
