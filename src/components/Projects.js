import React, { Component } from "react";
import Footer from "./Footer";
import projectsData from "./projects-data.json";
import Project from "./ProjectsItem";

class Projects extends Component {
  state = { projectsData };
  render() {
    return (
      <div>
        <h1 className="projects-title">Projects &amp; Apps</h1>
        {this.state.projectsData.map((project) => {
          return (
            <Project
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              img={project.img}
              github={project.github}
              deployed={project.deployed}
              key={project.title}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default Projects;
