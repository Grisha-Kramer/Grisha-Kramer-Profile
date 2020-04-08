import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { slide as Menu } from 'react-burger-menu'

class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    return (
      <Menu style="font-family: Montserrat">
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="portfolio" className="menu-item" href="/">Portfolio</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default Navbar
