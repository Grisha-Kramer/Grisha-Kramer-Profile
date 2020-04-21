import React from "react";
import data from "../../../src/components/Data"

function About() {
  return (
    <>
      <br></br>
      <div className="container" styles="font-family: Montserrat">
        <div className="col-xs-4 col-lg-4 text-center">
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
          <h1>Recreation</h1>
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
          <h1>Code</h1>
          <p>HTML #CSS</p>
          <p>Javascript jQuery</p>
          <p>Bootstrap APIs</p>
          <p>mySQL NoSQL</p>
          <p>AJAX Express</p>
          <p>Node.js JSON</p>
          <p>MongoDB Mongoose</p>
          <p>React Passport</p>
        </div>
        <div className="col-xs-4 col-lg-4 text-center">
          <img
            src="../icons/Suitcase-01.png"
            styles="width:50%"
            alt="Suitcase"
            classname="icon"
            width="100px"
          ></img>
          <h1>Professional</h1>
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
          <p>Recruiting, hiring and training</p>
        </div>
      </div>
    </>
  );
}

export default About;
