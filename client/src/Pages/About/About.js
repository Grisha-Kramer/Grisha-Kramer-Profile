import React from "react";


function About() {
  return (
    <>
      <br></br>
      <div className="container" styles="font-family: Montserrat">
        <div className="col-xs-4 col-lg-4 text-center">
          <img
            src="../icons/Pen-01.png"
            styles="width:50%"
            alt="Pen"
            className="icon"
            width="100px"
          />
          <h1>Grisha Kramer</h1>
          <p>Full stack Developer based in Richmond with extensive experience working in startups</p>
          <h1>Hobbies and fun</h1>
          <p>Riding and repairing bicycles</p>
          <p>Guitar, Keys, Drums, Accordion, Cello, Beatbox</p>
          <p>Intense culinary activities, sourdough, pizza tossing, cheesemaking etc etc</p>
        </div>

        <div className="col-xs-4 col-lg-4 text-center">
          <img
            src="../icons/Lightbulb-01.png"
            styles="width:50%"
            alt="Gear"
            classname="icon"
            width="100px"
          ></img>
          <h1>Front End</h1>
          <p>HTML</p>
          <p>Javascript</p>
          <p>jQuery</p>
          <p>#CSS</p>
          <p>Bootstrap</p>
          <p>AJAX</p>
          <p>JSON</p>
          <p>React</p>
        </div>

        <div className="col-xs-4 col-lg-4 text-center">
          <img
            src="../icons/Gear-01.png"
            styles="width:50%"
            alt="Suitcase"
            classname="icon"
            width="100px"
          ></img>
          <h1>Backend</h1>
          <p>APIs</p>
          <p>Express</p>
          <p> Passport</p>
          <p>Node.js</p>
          <p>mySQL</p>
          <p>noSQL</p>
          <p>Mongo</p>
          <p>Mongoose</p>
        </div>
      </div>
    </>
  );
}

export default About;
