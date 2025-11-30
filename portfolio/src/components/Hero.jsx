import React from "react";

const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Available for new projects
          </div>
          <h1>
            Building <span className="gradient-text">Digital Experiences</span>
            <br />
            That Matter.
          </h1>
          <p className="hero-subtitle">
            I'm <span className="highlight">Vikas Kumar</span>, a full-stack engineer 
            transforming ideas into scalable, high-performance web applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary glow">
              View Work
            </a>
            <a href="#contact" className="btn ghost">
              Contact Me
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12k+</span>
              <span className="stat-label">Students</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-glass">
            <div className="card-header">
              <div className="window-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="code-block">
              <div className="code-line"><span className="keyword">const</span> <span className="variable">developer</span> = <span className="brace">{`{`}</span></div>
              <div className="code-line indent">  name: <span className="string">'Vikas'</span>,</div>
              <div className="code-line indent">  skills: [<span className="string">'React'</span>, <span className="string">'Node'</span>],</div>
              <div className="code-line indent">  passion: <span className="boolean">true</span></div>
              <div className="code-line"><span className="brace">{`}`}</span>;</div>
            </div>
            <div className="floating-badge react">⚛️</div>
            <div className="floating-badge node">🟢</div>
          </div>
          <div className="glow-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
