import React from "react";
import "./TopBanner.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const TopBanner = () => {
  return (
    <section className="top-banner d-flex align-items-center justify-content-center">
      <Container className="">
        <Row >
          <Col>
            <div className="caption-wrap-inner  left-align">
              <h1 className="caption-title text-light mb-4">
                Make your home safe and smart with us
              </h1>
              <h4 className="caption-subtitle text-light mb-5">
                We Provide Electrical Services For Industrial Projects.
              </h4>
              <div className="city-btns-group">
                <Button className="btn-one city-btn">
                  <span className="btn-text-wrap">
                    <span className="btn-text font-weight-bold">Contact Us Today</span>
                  </span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TopBanner;
