import React from "react";
import "./style.css";

function Contact() {
  return (
      <nav className="navbar navbar-expand-lg" navbar-light style="background-color: white" style="font-family: Montserrat;">
    <a className="navbar-brand" href="#">
      <div className="logo-image">
            <img src="./images/Logo-01.png" className="img-fluid" width="49px" height="49px">
      </div>
    </a>
    <button className="navbar-toggler" >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">About <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">Contact</a>
        </li>
          </div>
        </li>
      
      
    </div>
  </nav>

  <div className="container" style="font-family: Montserrat"">

     
      
    
    <div className="row">
      <div className="col-xs-4 col-lg-4 text-center">
            <img src="./images/Pen-01.png" style="width:50%">
            <h1>Contact</h1>
            <p>Email: grisharkramer@gmail.com </p>
           <p><a href="https://www.linkedin.com/in/grisha-kramer-65b8777b/">Linkedin</a></p>
      <p><a href="https://www.linkedin.com/in/grisha-kramer-65b8777b/">Github</a></p>
      <p><a href="pdf.html">Resume</a></p>
      </div>

   
      
  </div>
    );
}

export default Contact;
