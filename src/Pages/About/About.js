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
          <img src="./images/Gear-01.png" style="width:50%"></img>
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
      </div>
    </>
  );
}

export default AboutMe;
