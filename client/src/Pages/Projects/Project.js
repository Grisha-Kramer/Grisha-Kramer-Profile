import React from "react";
import "./style.css";

function Project() {
  return (
    <div className="container" styles="font-family: Montserrat">
      <div className="row">
        <div className="col-xs-4 col-lg-4 text-center">
          <img
            src="../icons/Pen-01.png"
            styles="width:50%"
            alt="Pen"
            width="100px"
          ></img>
          <h1>Projects</h1>
          <h1 href="https://bferriman.github.io/pet-spiration/">
            Petspiration{" "}
          </h1>
          <img
            src="../icons/PetSpiration-demo.gif"
            a
            href="https://bferriman.github.io/pet-spiration/"
          ></img>
          <p>
            <a href="https://bferriman.github.io/pet-spiration/">
              Find and display info about shelter pets
            </a>
          </p>
          <a href="https://github.com/Grisha-Kramer/pet-spiration">
            View on Github
          </a>
          <h1>Nextdoor Neighbor </h1>

          <img src="../icons/Nextdoor-Neighbor.gif"></img>
          <p>
            <a href="https://glacial-eyrie-74819.herokuapp.com/">
              Find local small businesses to support
            </a>
          </p>
          <a href="https://github.com/Grisha-Kramer/nextdoor_neighbor">
            View on Github
          </a>
          <h1>Pipeline </h1>
          <p>
            <a href="https://github.com/seibert-gm90/Pipeline">
              Streamline the commercial real estate documentation process
            </a>
          </p>
          <a href="https://github.com/seibert-gm90/Pipeline">View on Github</a>
        </div>

        <div className="col-xs-4 col-lg-4 text-center">
          <img
            src="../icons/Gear-01.png"
            styles="width:50%"
            alt="Gear"
            classname="icon"
            width="100px"
          ></img>
          <h1>Homework</h1>
          <p>
            First Profile:{" "}
            <a href="https://github.com/Grisha-Kramer/Homework2">View</a>
          </p>

          <p>
            Template Engine:{" "}
            <a href="https://github.com/Grisha-Kramer/Node-pdf-profile">View</a>
          </p>
          <p>
            Note Taker:{" "}
            <a href="https://cryptic-peak-50402.herokuapp.com/">View</a>
          </p>
          <p>
            Team Builder:{" "}
            <a href="https://github.com/Grisha-Kramer/Team-builder">View</a>
          </p>
        </div>

        <div className="col-xs-4 col-lg-4 text-center">
          <img
            src="../icons/Lightbulb-01.png"
            styles="width:50%"
            alt="Lightbulb"
            classname="icon"
            width="100px"
          ></img>

          <h1>Future Dev</h1>
          <h1>Custom Alarm Clock</h1>
          <p>
            Alarm clock that allows users to record their own alarms and set
            alarms relative to their REM cycles
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
