/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Router>
        <div>
          <div className="ContentDiv">
            <Navbar />
            <Header />
            <Route exact path="/" component={Aboutme} />
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
