import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="/">
              <li>About</li>
            </a>
            <a href="/Projects">
              <li>Projects</li>
            </a>
            <a href="/Contact">
              <li>Contact</li>
            </a>
            <a href="/Portfolio">
              <li>Portfolio</li>
            </a>
          </ul>
        </div>
      </nav>
      <div className="container fluid head">
        <img src="../icons/Logo-01.png" alt="logo" width="75px" />
      </div>
    </div>
  );
}

export default Header;
