const timelineItems = [
  {
    year: "Now",
    title: "Full Stack Mentor & Engineer",
    description:
      "Teaching MERN stack, reviewing code, and helping learners build real-world projects.",
  },
  {
    year: "2022",
    title: "Senior Frontend Engineer",
    description:
      "Led React & Next.js initiatives, improved performance and DX across multiple products.",
  },
  {
    year: "2019",
    title: "Full Stack Developer",
    description:
      "Built REST APIs with Node.js & Express, integrated frontend and backend systems.",
  },
];

import React from "react";

const Timeline = () => {
  return (
    <section className="section alt" id="timeline">
      <div className="container">
        <h2 className="section-title">Journey</h2>
        <p className="section-subtitle">
          How I grew from curious learner to mentor and full-stack engineer.
        </p>

        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
              key={item.year}
            >
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
