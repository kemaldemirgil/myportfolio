import React from "react";
import pic from "../assets/skykd.JPG";
import video from "../assets/hex-flash.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faFileCode,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="fluid-container">
          <div className="row align-items-center">
            <div className="col">
              <div className="jumbo">
                <h1 data-aos="fade-up">About me</h1>
                <video autoPlay muted loop className="myVideo">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4" data-aos="fade-left">
              <img className="kd" src={pic} alt="kd pic" />
            </div>
            <div className="col-lg-8" data-aos="fade-right">
              <p className="kd-info">
                <span style={{ color: "#e1b32c", fontSize: "3rem" }}>
                  Hello friend!
                </span>
                <br />
                <br />
                I like code and my favorite language is Ruby, but I also like
                Python as well.
                <br />
                Thanks for reading!
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid skills">
          <div className="row">
            <div className="col-lg text-center skill-group">
              <FontAwesomeIcon icon={faFileCode} />
              <p data-aos="fade-up">Languages</p>
              <ul className="list-group">
                <li data-aos="fade-up-left">Ruby</li>
                <li data-aos="fade-up">Python</li>
                <li data-aos="fade-up-right">JavaScript/Typescript</li>
                <li data-aos="fade-up-left">jQuery</li>
                <li data-aos="fade-up-right">CSS/Sass</li>
                <li data-aos="fade-up">SQL</li>
                <li data-aos="fade-up-left">Bash</li>
              </ul>
            </div>
            <div className="col-lg text-center skill-group">
              <FontAwesomeIcon icon={faLaptopCode} />
              <p data-aos="fade-up">Frameworks / Libraries</p>
              <ul className="list-group">
                <li data-aos="fade-up-right">Ruby on Rails</li>
                <li data-aos="fade-up">Django</li>
                <li data-aos="fade-up-left">ReactJS</li>
                <li data-aos="fade-up-right">ExpressJS</li>
                <li data-aos="fade-up-left">NodeJS</li>
                <li data-aos="fade-up-left">Semantic UI</li>
              </ul>
            </div>
            <div className="col-lg text-center skill-group">
              <FontAwesomeIcon icon={faCodeBranch} />
              <p data-aos="fade-up">Other</p>
              <ul className="list-group">
                <li data-aos="fade-up-right">Git</li>
                <li data-aos="fade-up">MongoDB</li>
                <li data-aos="fade-up-left">MySQL</li>
                <li data-aos="fade-up">GraphQL</li>
                <li data-aos="fade-up-left">Heroku</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
