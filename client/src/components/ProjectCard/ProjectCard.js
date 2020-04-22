import React from "react";
import user from "../Data"

const Work = () => {
  return (
    <div className="work_container">
      <h1>Projects.</h1>
      <div className="projects_container">
        {user.projects.map((project) => (
          <div key={project.id} className="project">
            <div className="image">
              <a href={project.url}>
                <img src={project.imageSrc} alt={project.title}></img>
              </a>
            </div>
            <div className="title">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
