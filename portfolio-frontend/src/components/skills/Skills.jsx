import React, { useEffect, useState } from "react";
import "./Skills.css";

const skillsData = [
  { name: "React (Frontend)", level: 8, className: "react" },
  { name: "Spring Boot (Backend)", level: 8, className: "spring" },
  { name: "MongoDB & SQL", level: 9, className: "db" },
  { name: "System Design", level: 7, className: "system" },
  { name: "Java (DSA)", level: 9, className: "java" },
];

function Skills() {
  const [values, setValues] = useState(skillsData.map(() => 0));
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    skillsData.forEach((skill, index) => {
      let start = 0;
      const interval = setInterval(() => {
        start++;
        setValues((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
        if (start === skill.level) clearInterval(interval);
      }, 150);
    });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-main-title">My Skills 👨🏼‍💻</h2>

      <div className="skills-wrapper">
        {skillsData.map((skill, index) => (
          <div className="skill-block" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              {/* <span>{values[index]} / 10</span> */}
            </div>

            <div className="skill-bar">
              <div
                className={`skill-fill ${skill.className} ${
                  animate ? "show" : ""
                }`}
                style={{
                  width: animate ? `${skill.level * 10}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
