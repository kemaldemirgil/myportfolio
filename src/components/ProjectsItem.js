import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faWindowRestore,
  faSitemap,
  faChevronRight,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { Image, Divider, Icon, Header } from "semantic-ui-react";

const Project = (props) => (
  <div className="container-fluid project-container">
    <Divider horizontal data-aos="zoom-in">
      <Header as="span">
        <Icon name="file code" />
        {props.title}
      </Header>
    </Divider>
    <div className="row">
      <div className="col-lg-4 app-img" data-aos="fade-down">
        <Image
          fluid
          label={{
            as: "span",
            color: "purple",
            content: props.title,
            icon: "thumbtack",
            ribbon: true,
          }}
          src={require(`../assets/project-images/${props.img}`).default}
        />
      </div>
      <div className="col-lg-7" data-aos="fade-up">
        <h1>{props.title}</h1>
        <p className="app-desc">
          <FontAwesomeIcon icon={faChevronRight} /> {props.desc}
        </p>
        <p style={{ fontSize: "110%" }}>
          <FontAwesomeIcon icon={faSitemap} /> Technologies
        </p>
        {props.tech.map((tech, idx) => (
          <span className="badge" key={idx}>
            <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: "70%" }} />{" "}
            {tech}
          </span>
        ))}
        <br />
        <div className="buttons">
          <button type="button" className="btn btn-outline-secondary">
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Repo
            </a>
          </button>
          {props.deployed && (
            <button type="button" className="btn btn-outline-secondary">
              <a
                href={props.deployed}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWindowRestore} /> Deployed App
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Project;
