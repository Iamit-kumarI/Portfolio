import React from "react";
import portfolioImg from "./portfolio.png";
import ai from "./ai.jpg"
import soci from "./society.png"
import "./Project.css";

function Project() {
  const projects = [
    {
      title: "Portfolio",
      img: portfolioImg,
      links: [
        {
          text: "frontend +",
          url: "https://github.com/Iamit-kumarI/Portfolio",
        },
        {
          text: "backend",
          url: "https://github.com/Iamit-kumarI/Portfolio-Backend",
        },
      ],
      tooltip:
        "Frontend in React, Backend in Spring Boot. Click below to explore code!",
    },
    {
      title: "Project 2",
      img: ai,
      links: [{ text: "source code", url: "#" }],
      tooltip: "This project is in development phase...",
    },
    {
      title: "Project 3",
      img: soci,
      links: [{ text: "source code", url: "#" }],
      tooltip: "This project is in planning phase...",
    },
  ];

  return (
    <>
      <div className="container">
        {projects.map((proj, index) => (
          <div
            key={index}
            className={`projectCard ${index === 0 ? "firstProject" : index === 1 ? "secondProject" : "thirdProject"}`}
          >
            <img src={proj.img} alt={proj.title} className="portfolioImg" />
            <div className="firstName" data-tooltip={proj.tooltip}>
              {proj.title}
            </div>
            <div className="project-links">
              {proj.links.map((link, idx) => (
                <a href={link.url} target="_blank" className="code" key={idx}>
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
