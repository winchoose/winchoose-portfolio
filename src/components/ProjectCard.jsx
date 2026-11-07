import styled from "styled-components";

const Card = styled.article`
  min-width: 0;
  overflow: hidden;
  border: 1px solid #e2e7ed;
  border-radius: 16px;
  background: #fff;

  .project-info {
    padding: 36px;
  }

  .project-overview--image {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    align-items: center;
    gap: 32px;
  }

  .project-overview img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 40 / 21;
    object-fit: cover;
    border: 1px solid #edf0f4;
    border-radius: 10px;
  }

  h3 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -1px;
  }

  p {
    margin: 14px 0 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.8;
    letter-spacing: -0.3px;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 24px 0 0;
    padding: 0;
    list-style: none;
  }

  .project-technologies li {
    padding: 5px 9px;
    border-radius: 4px;
    background: #f2f4f6;
    color: #454f5d;
    font-size: 11px;
    line-height: 1.5;
  }

  .project-period {
    margin-top: 8px;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }

  .project-contributions {
    margin-top: 24px;
    padding-top: 22px;
    border-top: 1px solid #edf0f4;

    .contribution-group + .contribution-group {
      margin-top: 24px;
    }

    h4 {
      margin: 0;
      font-size: 15px;
      font-weight: 700;
      line-height: 1.5;
    }

    .project-role {
      margin-top: 8px;
      color: var(--blue);
      font-size: 13px;
      font-weight: 500;
    }

    ul {
      margin: 14px 0 0;
      padding-left: 20px;
      list-style: disc;
    }

    li {
      padding-left: 3px;
      color: #454f5d;
      font-size: 15px;
      line-height: 1.8;
      word-break: keep-all;
      overflow-wrap: anywhere;
    }

    li + li {
      margin-top: 8px;
    }

    .project-empty {
      margin-top: 14px;
      font-size: 14px;
      color: var(--muted);
    }
  }

  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid #edf0f4;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: 32px;
    font-size: 13px;
    font-weight: 600;

    &:hover {
      color: var(--blue);
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }

  @media (max-width: 700px) {
    .project-overview--image {
      grid-template-columns: minmax(0, 1fr);
      gap: 24px;
    }

    .project-overview img {
      max-width: 360px;
    }
  }

  @media (max-width: 600px) {
    border-radius: 12px;

    .project-info {
      padding: 22px;
    }

    h3 {
      font-size: 25px;
    }

    p {
      font-size: 14px;
    }
  }
`;

function ProjectCard({
  name,
  description = "",
  image = "",
  technologies = [],
  repositoryUrl = "",
  siteUrl = "",
  presentationUrl = "",
  blogUrl = "",
  period = "",
  role = "",
  contributionTitle = "담당한 일",
  contributions = [],
}) {
  return (
    <Card>
      <div className="project-info">
        <div className={image ? "project-overview project-overview--image" : "project-overview"}>
          {image && <img src={image} alt={`${name} 대표 이미지`} width="2400" height="1260" loading="lazy" decoding="async" />}
          <div>
            <h3>{name}</h3>
            {period && <p className="project-period">{period}</p>}
            {description && <p>{description}</p>}
          </div>
        </div>
        <section className="project-contributions" aria-label={`${name}에서 담당한 일`}>
          {role && <p className="project-role">{role}</p>}
          {contributions.length > 0 ? (
            contributions.map(({ title, items }) => (
              <div className="contribution-group" key={title}>
                <h4>{title}</h4>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))
          ) : (
            <>
              <h4>{contributionTitle}</h4>
              <p className="project-empty">기여 내용을 준비하고 있어요.</p>
            </>
          )}
        </section>
        {technologies.length > 0 && (
          <ul className="project-technologies" aria-label={`${name} 사용 기술`}>
            {technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        )}
        {(repositoryUrl || siteUrl || presentationUrl || blogUrl) && (
          <div className="project-links">
            {repositoryUrl && (
              <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} GitHub (새 탭에서 열림)`}>
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
            {siteUrl && (
              <a href={siteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} 서비스 보기 (새 탭에서 열림)`}>
                서비스 보기 <span aria-hidden="true">↗</span>
              </a>
            )}
            {presentationUrl && (
              <a href={presentationUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} 발표 영상 (새 탭에서 열림)`}>
                발표 영상 <span aria-hidden="true">↗</span>
              </a>
            )}
            {blogUrl && (
              <a href={blogUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} 기술 블로그 (새 탭에서 열림)`}>
                기술 블로그 <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

export default ProjectCard;
