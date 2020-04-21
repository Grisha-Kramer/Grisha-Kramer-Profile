import React from "react";
import data from "../../components/Data"
import "./style.css";

function Contact() {
  return (
    <div className="container" styles="font-family: Montserrat">
      <div className="col-xs-4 col-lg-4 text-center">
        <img
          src="../icons/Pen-01.png"
          alt="Pen"
          className="icon"
          width="300px"
        ></img>
        <h1>Contact</h1>
        <p>
          <a href="mailto:grisharkramer@gmail.com">{data.contactEmail}</a>
        </p>
        <p>(401) 829-7455</p>
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
  );
}

export default Contact;
