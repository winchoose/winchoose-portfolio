import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectCard from "./components/ProjectCard";
import { projectList } from "./projectList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">
        본문으로 바로가기
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <div className="content-sections">
          <About />
          <section
            className="content-section project-section"
            id="projects"
            aria-labelledby="projects-title"
          >
            <div className="section-label">
              <span>02</span>PROJECTS
            </div>
            <div className="section-content">
              <h2 id="projects-title">
                프로젝트<span aria-hidden="true">.</span>
              </h2>
            </div>
            <div className="project-list">
              {projectList.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>
          <Experience />
        </div>
      </main>
      <footer>
        <a href="#home" aria-label="첫 화면으로 이동">
          OH SEUNGTAEK<span aria-hidden="true">.</span>
        </a>
        <small>© {new Date().getFullYear()} Oh Seungtaek</small>
      </footer>
    </div>
  );
}

export default App;
