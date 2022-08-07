import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kd-logo-transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          data-aos="zoom-in"
          data-aos-offset="0"
          href="/"
        >
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#e1b32c" }} />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          data-aos="zoom-out-left"
          data-aos-offset="0"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className="nav-item" to="/about">
              <li className="nav-link">About</li>
            </Link>
            <Link className="nav-item" to="/projects">
              <li className="nav-link">Projects</li>
            </Link>
            <Link className="nav-item" to="/contact">
              <li className="nav-link">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
