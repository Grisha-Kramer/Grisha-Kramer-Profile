import React from "react";

function AboutMe() {
  return (
    <>
      <br></br>
      <div className="container" style="font-family: Montserrat">
        <div className="col-xs-4 col-lg-4 text-center">
          <img src="./public/icons/Pen-01.png" style="width:50%"></img>
          <h1>Grisha Kramer</h1>
          <p> I am creative full stack Developer based in Richmond, VA</p>
        </div>

        <div class="col-xs-4 col-lg-4 text-center">
          <img src="./public/icons/Gear-01.png" style="width:50%"></img>
          <h1>Front | Back </h1>
          <p>HTML |APIs</p>
          <p>Javascript | Express</p>
          <p>jQuery | Passport</p>
          <p>#CSS | Node.js</p>
          <p>Bootstrap | mySQL</p>
          <p>AJAX | Mongo</p>
          <p>JSON | Mongoose</p>
          <p>React | </p>
        </div>

        <div class="col-xs-4 col-lg-4 text-center">
          <img src="./public/icons/Suitcase-01.png" style="width:50%"></img>
          <h1>Professional Skills</h1>
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
          <img src="./public/icons/Ribbon-01.png" style="width:50%"></img>
          <h1>Hobbies and fun</h1>
          <p>Riding and repairing bicycles</p>
          <p>Guitar, Keys, Drums, Accordion, Cello, Beatbox</p>
          <p>Code</p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
