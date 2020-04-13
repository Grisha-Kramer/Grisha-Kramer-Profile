/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/NavBar"
import About from "./Pages/About/About"
import Projects from "./pages/Projects/Project"
import Contact from "./Pages/Contact/Contact"
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
