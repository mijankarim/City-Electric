import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './About.css';
import about from '../../../images/about.png'

const About = () => {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col sm={6}>
              <img src={about} alt="about"/>
          </Col>
          <Col sm={6}>
            <h3 className="mb-4">About Us</h3>
            <p>
              <strong>
                Our company specializes in electrical wiring and repair. We
                carry out any projects with our hearts and are not afraid of
                difficulties!
              </strong>
            </p>
            <p>
              Our team has been developing over the years. Today it includes
              only highly qualified specialists with experience and their own
              best practices. We boldly look into the future and confidently
              master new technologies, we always offer our customers different
              options and solutions. It’s convenient and comfortable with us!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
