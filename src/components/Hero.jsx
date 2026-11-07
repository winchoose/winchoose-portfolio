import styled, { keyframes } from "styled-components";

const heroAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Main = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 640px;
  min-height: max(640px, 100svh);
  padding-block: 150px 160px;
  overflow: hidden;
  background: var(--blue);
  color: #fff;

  @media (max-width: 600px) {
    min-height: max(580px, 100svh);
    padding-block: 140px 150px;
  }

  .hero-illustration {
    position: absolute;
    top: 50%;
    right: -2vw;
    width: clamp(300px, 43vw, 640px);
    height: auto;
    aspect-ratio: 1;
    object-fit: contain;
    opacity: 0.42;
    transform: translateY(-50%);
    pointer-events: none;
    user-select: none;

    @media (max-width: 600px) {
      right: -24vw;
      width: 90vw;
      opacity: 0.28;
    }
  }

  .hero-content {
    position: relative;
    z-index: 1;
    width: min(100% - var(--page-gutter), 1280px);
    margin-inline: auto;
    padding-bottom: 5px;
  }

  .eyebrow {
    margin-bottom: 28px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 2.8px;
    animation: ${heroAppear} 800ms ease-out 100ms both;

    @media (max-width: 600px) {
      margin-bottom: 24px;
      font-size: 10px;
      letter-spacing: 2px;
    }
  }

  h1 {
    font-size: clamp(48px, 6vw, 86px);
    font-weight: 750;
    line-height: 1.3;
    letter-spacing: -0.065em;
    word-break: keep-all;
    animation: ${heroAppear} 1100ms cubic-bezier(0.22, 1, 0.36, 1) 220ms both;

    span {
      display: inline-block;
    }

    @media (max-width: 600px) {
      font-size: clamp(38px, 8.9vw, 53px);
      line-height: 1.4;
      letter-spacing: -0.065em;

      span {
        display: block;
      }
    }
  }

  .description {
    margin-top: 26px;
    font-size: clamp(22px, 2.5vw, 34px);
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: -0.045em;
    word-break: keep-all;
    animation: ${heroAppear} 1100ms cubic-bezier(0.22, 1, 0.36, 1) 620ms both;

    @media (max-width: 600px) {
      margin-top: 22px;
      max-width: 300px;
      font-size: clamp(17px, 4.5vw, 23px);
    }
  }

  .hero-bottom {
    width: min(100% - var(--page-gutter), 1280px);
    margin-inline: auto;
    position: absolute;
    inset: auto 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    animation: ${heroAppear} 900ms ease-out 1050ms both;

    @media (max-width: 600px) {
      bottom: 28px;
    }
  }

  .scroll-arrow {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid #ffffff66;
    border-radius: 50%;
    transition:
      background-color 180ms ease,
      transform 180ms ease;
  }

  .scroll-link {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    font-size: 12px;
    letter-spacing: -0.2px;

    &:hover .scroll-arrow {
      background: #ffffff18;
      transform: translateY(3px);
    }
  }

  .caption {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1.5px;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

function Hero() {
  return (
    <Main id="home" aria-labelledby="hero-title">
      <img
        className="hero-illustration"
        src="/images/thinking-illustration.png"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-content">
        <p className="eyebrow">FRONTEND DEVELOPER</p>
        <h1 id="hero-title">
          <span>고민하는 게</span> <span>즐거운 개발자</span>
        </h1>
        <p className="description">프론트엔드 개발자 오승택입니다</p>
      </div>
      <div className="hero-bottom">
        <a className="scroll-link" href="#about">
          <span className="scroll-arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4v16m-6-6 6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>아래로 스크롤</span>
        </a>
        <span className="caption" aria-hidden="true">
          OH SEUNGTAEK — PORTFOLIO
        </span>
      </div>
    </Main>
  );
}

export default Hero;
