import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://glacial-headland-56185.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <section className="services-container alternative-bg">
      <Container className="pt-3 pb-3">
        <Row>
          <Col className="text-center my-5">
            <p>Our Services</p>
            <h3>Services We provide</h3>
          </Col>
        </Row>

        {isLoading ? (
          <div className="d-flex align-items-center justify-content-center loader">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Row>
            {services.length === 0 ? (
              <div className="text-light text-center w-100 py-5">
                <h3>No Services Found</h3>
              </div>
            ) : (
              services.map((service) => (
                <Col xs={12} sm={6} md={4} key={service._id}>
                  <Service service={service} />
                </Col>
              ))
            )}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Services;
