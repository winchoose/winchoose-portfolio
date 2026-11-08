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

    .contribution-heading {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px 16px;
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

  .project-metrics {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    margin: 18px 0 0;
    padding: 24px;
    border-radius: 10px;
    background: #f7f9fc;

    > div {
      min-width: 0;
    }

    dt {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
      word-break: keep-all;
    }

    dd {
      margin: 8px 0 0;
      color: var(--blue);
      font-size: 32px;
      font-weight: 700;
      line-height: 1.3;
      letter-spacing: -1px;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    span {
      margin-left: 4px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0;
    }

    @media (max-width: 700px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px 16px;
      padding: 16px;

      dd {
        font-size: 26px;
      }

      span {
        font-size: 13px;
      }
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
    min-width: 0;
    max-width: 100%;
    font-size: 13px;
    font-weight: 600;

    &:hover {
      color: var(--blue);
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }

  .contribution-link {
    min-height: 24px;
    gap: 8px;
    font-size: 12px;
  }

  .link-icon {
    flex: 0 0 20px;
  }

  .link-icon--youtube {
    color: #ff0033;
  }

  .link-icon--tistory {
    width: 14px;
    height: 14px;
    flex-basis: 14px;
    color: #ff5544;
  }

  .link-label {
    min-width: 0;
    word-break: keep-all;
    overflow-wrap: anywhere;
    line-height: 1.6;
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
  presentationTitle = "발표 영상",
  blogUrl = "",
  blogTitle = "기술 블로그",
  period = "",
  role = "",
  contributionTitle = "담당한 일",
  contributions = [],
  pullRequests = [],
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
        <section className="project-contributions" aria-label={`${name} 프로젝트 경험`}>
          {role && <p className="project-role">{role}</p>}
          {contributions.length > 0 ? (
            contributions.map(({ title, items = [], text, metrics = [], blogUrl }) => (
              <div className="contribution-group" key={title}>
                <div className="contribution-heading">
                  <h4>{title}</h4>
                  {blogUrl && (
                    <a className="contribution-link" href={blogUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} ${title} 기술블로그 (새 탭에서 열림)`}>
                      <svg className="link-icon link-icon--tistory" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/icons/brands.svg#tistory" /></svg>
                      <span className="link-label">기술블로그</span> <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
                {text && <p>{text}</p>}
                {metrics.length > 0 && (
                  <dl className="project-metrics">
                    {metrics.map(({ label, value, unit }) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}{unit && <span>{unit}</span>}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {items.length > 0 && (
                  <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
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
        {(repositoryUrl || siteUrl || presentationUrl || blogUrl || pullRequests.length > 0) && (
          <div className="project-links">
            {pullRequests.map(({ label, url }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} ${label} (새 탭에서 열림)`}>
                <svg className="link-icon link-icon--github" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/icons/brands.svg#github" /></svg>
                <span className="link-label">{label}</span> <span aria-hidden="true">↗</span>
              </a>
            ))}
            {repositoryUrl && (
              <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} GitHub (새 탭에서 열림)`}>
                <svg className="link-icon link-icon--github" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/icons/brands.svg#github" /></svg>
                <span className="link-label">GitHub</span> <span aria-hidden="true">↗</span>
              </a>
            )}
            {siteUrl && (
              <a href={siteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} 서비스 보기 (새 탭에서 열림)`}>
                서비스 보기 <span aria-hidden="true">↗</span>
              </a>
            )}
            {presentationUrl && (
              <a href={presentationUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} 발표영상: ${presentationTitle} (새 탭에서 열림)`}>
                <svg className="link-icon link-icon--youtube" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/icons/brands.svg#youtube" /></svg>
                <span className="link-label">발표영상: {presentationTitle}</span> <span aria-hidden="true">↗</span>
              </a>
            )}
            {blogUrl && (
              <a href={blogUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} 기술블로그: ${blogTitle} (새 탭에서 열림)`}>
                <svg className="link-icon link-icon--tistory" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/icons/brands.svg#tistory" /></svg>
                <span className="link-label">기술블로그: {blogTitle}</span> <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

export default ProjectCard;
