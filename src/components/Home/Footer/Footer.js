import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-light">
          <Col sm={3}>
            <h4>City Electric</h4>
            <p>
              We are here to fit the needs of your electrical services for your
              dream building.
            </p>
          </Col>
          <Col sm={3}>
            <h4>Explore</h4>
            <ul className="footer-links">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">Testimonials</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
            </ul>
          </Col>
          <Col sm={3}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Services Request</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </Col>
          <Col sm={3}>
            <h4>Contact Info</h4>
            <p>3922 Geraldine Lane, electric street, New York, SC 29201, USA</p>
            <p>Mail: windfallelectric@Info.com</p>
            <p>Call: +1-800-500-7600</p>
          </Col>
        </Row>
        <Row>
            <Col>
            <p className="text-center text-light mt-5">© Copyright City Electric 2021. All Rights reserved</p>
            </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
