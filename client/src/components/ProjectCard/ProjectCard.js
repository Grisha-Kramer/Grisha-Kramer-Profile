import React from "react";
import user from "../Data"
import "../ProjectCard/ProjectCard.css"

const Work = () => {
  return (
    <div className="container" styles="font-family: Montserrat">
      <div className="projects_container" id="proj">
        <div className="col-xl text-center">
          <h1 className="title">Projects & Homework</h1>
          {user.projects.map((project) => (
            <div key={project.id} className="project">
              <a href={project.url}></a>
           
              <div className="image" id="image">
                <a href={project.url}>
                  <img
                    src={project.imageSrc}
                    
                    
                  ></img>
                </a>
              </div>

              <strong className="title">{project.title}</strong>
              <p>{project.description}</p>
              <a href className="url">
                {project.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
