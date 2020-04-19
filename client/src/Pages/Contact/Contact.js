import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="container" styles="font-family: Montserrat">
      <div className="row">
        <div className="col-xs-4 col-lg-4 text-center">
          <img
            src="../icons/Pen-01.png"
            styles="width:50%"
            alt="Pen"
            className="icon"
            width="100px"
          ></img>
          <h1>Contact</h1>
          <p>Email: grisharkramer@gmail.com </p>
          <p>
            <a href="https://www.linkedin.com/in/grisha-kramer-65b8777b/">
              Linkedin
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/grisha-kramer-65b8777b/">
              Github
            </a>
          </p>
          <p>
            <a href="https://drive.google.com/open?id=1R7CZXNTuaiB65xl1VkMPnI4Xk1lpkr5-">
              Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
