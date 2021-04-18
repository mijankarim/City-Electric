import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import project1 from "../../../images/project1.png";
import project2 from "../../../images/project2.png";
import project3 from "../../../images/project3.png";
import project4 from "../../../images/project4.jpg";
import project5 from "../../../images/project5.jpg";
import project6 from "../../../images/project6.jpg";

const imagesData = [project1, project2, project3, project4, project5, project6];

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
          {imagesData.map((image, index) => (
            <Col sm={2} key={index} className="project-img mb-2">
              <img src={image} alt="project" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
