import styled from 'styled-components';

// 생년월일은 YYYY-MM-DD 형식으로 작성합니다.
const birthday = '2001-03-10';

const Main = styled.section`
  width: min(100% - var(--page-gutter), 1280px);
  margin-inline: auto;
  padding-block: 100px;

  .about-label {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 44px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;

    span {
      color: var(--blue);
      font-variant-numeric: tabular-nums;
    }
  }

  .about-layout {
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    align-items: center;
    gap: clamp(40px, 8vw, 112px);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid #edf0f4;
    border-radius: 12px;
  }

  h2 {
    margin: 0;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -2px;

    span {
      color: var(--blue);
    }
  }

  .about-role {
    margin-top: 12px;
    color: var(--muted);
    font-size: 17px;
    line-height: 1.6;
    letter-spacing: -0.5px;
  }

  dl {
    margin: 28px 0 0;
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    align-items: baseline;
    gap: 12px 24px;
    font-size: 14px;
    line-height: 1.8;
  }

  dt {
    color: var(--muted);
  }

  dd {
    margin: 0;
    font-variant-numeric: tabular-nums;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  dd a:hover {
    color: var(--blue);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .about-story {
    max-width: 600px;
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid #e9edf2;
    color: #454f5d;
    font-size: 17px;
    line-height: 1.9;
    letter-spacing: -0.4px;
    word-break: keep-all;
    overflow-wrap: anywhere;

    p + p {
      margin-top: 16px;
    }
  }

  .about-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;

    a {
      display: inline-flex;
      align-items: center;
      gap: 20px;
      padding: 12px 18px;
      border: 1px solid #dfe4eb;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
      transition: color 180ms ease, border-color 180ms ease, background-color 180ms ease;
    }

    a:hover {
      color: var(--blue);
      border-color: var(--blue);
      background: #f5f8ff;
    }

    span {
      font-size: 16px;
    }
  }

  @media (max-width: 900px) {
    padding-block: 80px;

    .about-layout {
      grid-template-columns: 220px minmax(0, 1fr);
      gap: 48px;
    }
  }

  @media (max-width: 600px) {
    padding-block: 64px;

    .about-label {
      margin-bottom: 32px;
      font-size: 10px;
    }

    .about-layout {
      grid-template-columns: minmax(0, 1fr);
      gap: 32px;
    }

    img {
      max-width: 200px;
    }

    h2 {
      font-size: 34px;
    }

    .about-role,
    .about-story {
      font-size: 15px;
    }

    dl {
      margin-top: 20px;
      gap: 12px 20px;
    }
  }
`;

function About() {
  return (
    <Main id="about" aria-labelledby="about-title">
      <p className="about-label"><span>01</span>ABOUT</p>
      <div className="about-layout">
        <img
          src="/images/profile-oh-seungtaek.jpeg"
          alt="오승택 프로필 사진"
          width="413"
          height="531"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h2 id="about-title">오승택<span aria-hidden="true">.</span></h2>
          <p className="about-role">프론트엔드 개발자</p>
          <dl>
            <dt>생년월일</dt>
            <dd><time dateTime={birthday}>{birthday.replaceAll('-', '.')}</time></dd>
            <dt>위치</dt>
            <dd>서울 관악구</dd>
            <dt>이메일</dt>
            <dd><a href="mailto:456taek2@gmail.com">456taek2@gmail.com</a></dd>
            <dt>학교</dt>
            <dd>안양대학교<wbr />(컴퓨터공학과)</dd>
          </dl>
          <div className="about-story">
            <p>
              React와 TypeScript를 기반으로, 문제를 향한 고민이 더 좋은 협업과 서비스로 이어진다고 믿는 프론트엔드 개발자입니다.
            </p>
            <p>
              '아는 만큼 보인다'는 신념으로 새로운 기술을 탐구하고 깊이 있는 이해를 통해 성장을 추구합니다.
            </p>
          </div>
          <div className="about-links">
            <a href="https://github.com/winchoose" target="_blank" rel="noopener noreferrer" aria-label="GitHub (새 탭에서 열림)">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://taek2-0310.tistory.com/" target="_blank" rel="noopener noreferrer" aria-label="Blog (새 탭에서 열림)">
              Blog <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default About;
