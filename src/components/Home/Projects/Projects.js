import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Projects.css';
import project1 from "../../../images/project1.png";
import project2 from "../../../images/project2.png";
import project3 from "../../../images/project3.png";
import project4 from "../../../images/project4.jpg";
import project5 from "../../../images/project5.jpg";
import project6 from "../../../images/project6.jpg";

const Projects = () => {
  return (
    <section className="projects">
      <Container fluid>
        <Row>
          <Col className="text-center mb-5">
            <h3>Our Projects</h3>
            <p>Our project shows what are the services we provide.</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <img src={project1} alt="project1" />
          </Col>
          <Col sm={2}>
            <img src={project2} alt="project2" />
          </Col>
          <Col sm={2}>
            <img src={project3} alt="project3" />
          </Col>
          <Col sm={2}>
            <img src={project4} alt="project4" />
          </Col>
          <Col sm={2}>
            <img src={project5} alt="project5" />
          </Col>
          <Col sm={2}>
            <img src={project6} alt="project6" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
