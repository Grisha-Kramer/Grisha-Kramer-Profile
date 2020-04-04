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
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <br />
      <Banner />
      <br />
      <About />
      <br />
      <Footer />
      <br />
      <Contact />

      
    </div>
  );
}

export default App;
