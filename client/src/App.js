/* eslint-disable react/prefer-stateless-function */
import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/NavBar"
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Project";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import ProjectCard from "./components/ProjectCard/ProjectCard"

function App() {
  return (
    <>
      <Router>
        <div>
          <div className="ContentDiv">
            <Header />
            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Portfolio" component={ProjectCard} />
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
