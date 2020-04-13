/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/NavBar"
import About from "./src/Pages/About/About.js";
import Projects from "./src/Pages/Projects/Project";
import Contact from "./src/Pages/Contact/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Router>
        <div>
          <div className="ContentDiv">
            <Navbar />
            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
