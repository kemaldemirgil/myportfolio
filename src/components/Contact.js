import React from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Divider, Header } from "semantic-ui-react";
import Tilt from "react-tilt";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ntn54gt",
        "template_fuyg5hk",
        e.target,
        "user_ga3KwOb0fhmeexyTEp5c8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="email-wrapper">
      <div className="container social">
        <div className="row">
          <div className="col-md text-center" data-aos="fade-up-left">
            <FontAwesomeIcon icon={faGithub} />
            <p className="pt-3">
              <a
                href="http://github.com/kemaldemirgil"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/kemaldemirgil
              </a>
            </p>
          </div>
          <div className="col-md text-center" data-aos="fade-up">
            <FontAwesomeIcon icon={faLinkedin} />
            <p className="pt-3">
              <a
                href="http://linkedin.com/in/kemaldemirgil"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/kemaldemirgil
              </a>
            </p>
          </div>
          <div className="col-md text-center" data-aos="fade-up-right">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="pt-3">
              <a
                href="mailto:kemal.demirgil@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                kemal.demirgil@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Divider horizontal data-aos="zoom-in">
        <Header as="h1">Contact Me</Header>
      </Divider>
      <div className="container email-container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div
              className="col-7 form-group mx-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div
              className="col-7 form-group pt-3 mx-auto"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>
            <div
              className="col-7 form-group pt-3 mx-auto"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <div
              className="col-7 form-group pt-3 mx-auto"
              data-aos="fade-right"
              data-aos-duration="4000"
            >
              <textarea
                type="text"
                className="form-control"
                cols="15"
                rows="4"
                placeholder="Your message"
                name="message"
                required
              />
            </div>
            <Tilt>
              <div
                className="col-7 pt-3 mx-auto text-center"
                data-aos="fade-up"
                data-aos-duration="6000"
              >
                <input
                  type="submit"
                  className="btn btn-warning"
                  value="Send Message"
                />
              </div>
            </Tilt>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
