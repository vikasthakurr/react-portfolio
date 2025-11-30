import React from "react";

const Projects = ({ projects }) => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected work that showcases my approach to building products.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card-modern" key={project.title}>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="tech-stack">
                    {project.tech.slice(0, 3).map((t) => (
                      <span className="tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-footer">
                  <div className="project-links">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-link primary"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-link secondary"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
