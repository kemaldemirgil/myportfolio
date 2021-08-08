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
                My journey in Web Development started with the Carleton
                University <i>Full Stack Web Development</i> Boot Camp in{" "}
                <b>January 2021</b> and since then, I've been working on
                building web &amp; computer applications using several tools and
                languages. I have a great interest in{" "}
                <i>Software development,</i> <i>Cybersecurity</i> and{" "}
                <i>Game Development;</i> I'm hoping to continue my path towards
                this direction.
                <br />I come from a multi-cultural background while having the
                chance to experience several jobs and positions since childhood.
                Whenever I get the chance, I love to spend time in the nature
                and to go camping; I also enjoy cooking, gardening and reading
                books.
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
                <li data-aos="fade-up-right">Javascript</li>
                <li data-aos="fade-up-left">HTML</li>
                <li data-aos="fade-up-right">CSS</li>
                <li data-aos="fade-up">SQL</li>
                <li data-aos="fade-up-right">C++</li>
                <li data-aos="fade-up-left">Shell Scripts</li>
                <li data-aos="fade-up-right">G Code</li>
              </ul>
            </div>
            <div className="col-lg text-center skill-group">
              <FontAwesomeIcon icon={faLaptopCode} />
              <p data-aos="fade-up">Frameworks / Libraries</p>
              <ul className="list-group">
                <li data-aos="fade-up-right">React</li>
                <li data-aos="fade-up-left">Express</li>
                <li data-aos="fade-up-right">Node</li>
                <li data-aos="fade-up-left">Handlebars</li>
                <li data-aos="fade-up-right">jQuery</li>
                <li data-aos="fade-up-left">Semantic UI</li>
                <li data-aos="fade-up-right">Materialize</li>
                <li data-aos="fade-up-left">Bootstrap</li>
                <li data-aos="fade-up-right">Moment.js</li>
                <li data-aos="fade-up-left">Tilt.js</li>
                <li data-aos="fade-up-right">AOS.js</li>
                <li data-aos="fade-up-left">Email.js</li>
                <li data-aos="fade-up-right">Chart.js</li>
              </ul>
            </div>
            <div className="col-lg text-center skill-group">
              <FontAwesomeIcon icon={faCodeBranch} />
              <p data-aos="fade-up">Tools</p>
              <ul className="list-group">
                <li data-aos="fade-up-right">Git</li>
                <li data-aos="fade-up-left">Github</li>
                <li data-aos="fade-up-right">MongoDB</li>
                <li data-aos="fade-up-left">MySQL</li>
                <li data-aos="fade-up-right">Sass</li>
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
