import React from "react";


function Projects(props) {
  return (
    <div className="col m12 l6">
      <div className="card">
        <div className="card-image">
          <img src={props.images[0]} alt=""></img>
        </div>
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          <p>{props.short}</p>
        </div>
        <div className="card-action">
          <a href={`/project/${props.id}`}>Project Details</a>
        </div>
      </div>
    </div>
  );
}

export default Projects
