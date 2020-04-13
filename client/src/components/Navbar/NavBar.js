import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends React.Component {

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Projects"
                className={
                  window.location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar
