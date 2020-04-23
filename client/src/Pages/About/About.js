import React from "react";
import data from "../../../src/components/Data"
import "./style.css"

function About() {
  return (
    <>
      <br></br>
      <div className="container" styles="font-family: Montserrat" alt="cont">
        <div className="col-xs-4 col-lg-center-4 text-center text-wrap">
          <img
            src="../icons/Grisha.JPG"
            styles="width:50%"
            alt="Grisha"
            className="icon"
            width="100px"
          />
          <h1>{data.name}</h1>
          <p>
            Full stack Developer based in Richmond with extensive experience
            working in startups
          </p>
          <h1>Off Work</h1>
          <p>Riding and repairing bicycles</p>
          <p>{data.Music}</p>
          <p>{data.Culinary}</p>
        </div>

        <div className="col-xs-4 col-lg-4 text-center">
          <img
            src="../icons/Gear-01.png"
            styles="width:50%"
            alt="Gear"
            classname="icon"
            width="100px"
          ></img>
          <h1>Full Stack</h1>
          <strong>Languages</strong>
          <p>
            HTML <i className="fab fa-html5"></i> #CSS{" "}
            <i className="fab fa-css3-alt"></i>
          </p>
          <p>
            Javascript <i className="fab fa-js-square"></i> SQL
          </p>
          <p>
            Bootstrap <i className="fab fa-bootstrap"></i>
          </p>
          <strong>Javascript Libraries</strong>
          <p>
            React <i className="fab fa-react"></i> jQuery
          </p>
          <p>Chart.js Moment.js</p>

          <strong>Databases</strong>
          <p>MongoDB MySQL IndexedDB</p>
          <strong>Server-Side Development</strong>
          <p>
            Node.js <i className="fab fa-node"></i> Passport.js
          </p>
          <p>
            Express  Handlebars
          </p>
          <p>Mongoose Sequelize</p>
          <strong>Deployment</strong>
          <p>
            Git <i className="fab fa-git-square"></i> GitHub{" "}
            <i class="fab fa-github"></i> Heroku
          </p>
          <p>JawsDB mLab</p>
        </div>
        <div className="col-xs-4 col-lg-4 text-center text-wrap">
          <img
            src="../icons/Suitcase-01.png"
            styles="width:50%"
            alt="Suitcase"
            classname="icon"
            width="100px"
          ></img>
          <h1>Work</h1>
          <p>Google Ads</p>
          <p>Google Tag Manager</p>
          <p>Google Optimize</p>
          <p>Google Analytics</p>
          <p>Facebook Pixel</p>
          <p>Facebook Ad Manager</p>
          <p>SEMRush</p>
          <p>Vlookup("Advanced Excel", "Skills",2,TRUE)</p>
          <p>Tableau</p>
          <p>Hootsuite</p>
          <p>Mailchimp</p>
          <p>Hiring, training, managing</p>
        </div>
      </div>
    </>
  );
}

export default About;
