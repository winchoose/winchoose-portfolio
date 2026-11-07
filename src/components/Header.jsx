import { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.header`
  position: fixed;
  z-index: 20;
  inset: 0 0 auto;
  height: var(--header-height);
  color: ${({ $pastHero }) => ($pastHero ? "var(--ink)" : "#fff")};
  background: ${({ $pastHero }) => ($pastHero ? "#fff" : "var(--blue)")};
  box-shadow: ${({ $pastHero }) => ($pastHero ? "0 1px 0 #191f280d" : "none")};
  transition:
    background-color 240ms ease,
    color 240ms ease,
    box-shadow 240ms ease;

  > div {
    width: min(100% - var(--page-gutter), 1280px);
    margin-inline: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div > a {
    display: inline-flex;
    align-items: baseline;
    font-size: 23px;
    font-weight: 800;
    letter-spacing: -1.5px;

    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  > div > a span {
    margin-left: 2px;
    color: ${({ $pastHero }) => ($pastHero ? "var(--blue)" : "inherit")};
  }

  nav {
    display: flex;
    align-items: center;
    gap: 36px;

    @media (max-width: 600px) {
      gap: 22px;
    }
  }

  nav a {
    position: relative;
    padding-block: 12px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;

    &::after {
      content: "";
      position: absolute;
      inset: auto 0 5px;
      height: 1px;
      background: currentColor;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 180ms ease;
    }

    &:hover::after,
    &:focus-visible::after {
      transform: scaleX(1);
    }

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

function Header() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <Main $pastHero={pastHero}>
      <div>
        <a href="#home" aria-label="오승택 포트폴리오 첫 화면으로 이동">
          OH SEUNGTAEK<span aria-hidden="true">.</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
        </nav>
      </div>
    </Main>
  );
}

export default Header;
