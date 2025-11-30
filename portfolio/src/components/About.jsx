import React from "react";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Full stack engineer & mentor with a passion for clean code, clear
          explanations, and practical learning.
        </p>

        <div className="about-grid">
          <div className="about-card primary">
            <div className="card-icon">🚀</div>
            <h3>Who I Am</h3>
            <p>
              I&apos;m a full stack developer specialising in React, Next.js,
              Node.js, and modern JavaScript tooling. I love turning complex
              ideas into simple, usable interfaces.
            </p>
            <p>
              Over the years, I&apos;ve mentored thousands of students, helping
              them understand not just &quot;what&quot; to do, but
              &quot;why&quot; it works.
            </p>
          </div>

          <div className="about-card secondary">
            <div className="card-icon">⚡</div>
            <h3>What I Do</h3>
            <ul className="feature-list">
              <li>
                <span className="bullet">▹</span> 
                Design & build full-stack web apps (MERN / Next.js)
              </li>
              <li>
                <span className="bullet">▹</span>
                Guide learners through real-world projects
              </li>
              <li>
                <span className="bullet">▹</span>
                Career planning & technical interview prep
              </li>
              <li>
                <span className="bullet">▹</span>
                Workshops on modern web development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
