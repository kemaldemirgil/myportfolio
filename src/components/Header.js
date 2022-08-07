import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "#e1b32c",
                blur: 5,
              },
            },
          },
        }}
      />
      <div className="header-wraper">
        <div className="main-info">
          <h1 title="Kemal Demirgil">Kemal Demirgil</h1>
          <Typed
            className="typed-text"
            strings={[
              "Software Developer",
              "CNC Machinist",
              "Electrical Technician",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            className="caret"
            style={{ color: "#e1b32c" }}
          />
          <Link to="/contact" data-aos="fade-up" className="btn-main-contact">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
