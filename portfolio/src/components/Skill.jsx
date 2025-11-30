import React from "react";

const Skill = ({ skills }) => {
  const getIcon = (category) => {
    switch (category) {
      case "Frontend":
        return "🎨";
      case "Backend":
        return "⚙️";
      case "Tools & Practices":
        return "🛠️";
      default:
        return "💻";
    }
  };

  return (
    <section className="section alt" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          A snapshot of the technologies and tools I use regularly.
        </p>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.category}>
              <div className="skill-header">
                <div className="skill-icon">{getIcon(group.category)}</div>
                <h3>{group.category}</h3>
              </div>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li className="skill-chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
