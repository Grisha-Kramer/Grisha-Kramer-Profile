import React from "react";
import "./style.css";

function Project() {
  return (
    <div className="container" style="font-family: Montserrat">
      <div className="row">
        <div className="col-xs-4 col-lg-4 text-center">
          <img src="./public/icons/Pen-01.png" style="width:50%"></img>
          <h1>Projects</h1>
          <h1>
            Petspiration{" "}
            <a href="https://bferriman.github.io/pet-spiration/">View</a>
          </h1>
          <p>Find and display info about shelter pets</p>
          <h1>
            Nextdoor Neighbor{" "}
            <a href="https://glacial-eyrie-74819.herokuapp.com/">View</a>
          </h1>
          <p>Find local small businesses to support</p>
        </div>

        <div className="col-xs-4 col-lg-4 text-center">
          <img src=".public/icons/Gear-01.png" style="width:50%"></img>
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
          <img src="./public/icons/Lightbulb-01.png" style="width:50%"></img>
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
