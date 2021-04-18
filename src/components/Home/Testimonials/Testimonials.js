import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import './Testimonials.css';
import Testimonial from "../Home/Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://glacial-headland-56185.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <section className="testimonials-container">
      <Container className="pt-3 pb-5 mb-5">
        <Row>
          <Col className="text-center my-5">
            <h3>Testimonials</h3>
          </Col>
        </Row>

        {isLoading ? (
          <div className="d-flex align-items-center justify-content-center loader">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Row>
            {testimonials.length === 0 ? (
              <div className="text-light text-center w-100 py-5">
                <h3>No Services Found</h3>
              </div>
            ) : (
              testimonials.map((testimonial) => (
                <Col xs={12} sm={6} md={4} key={testimonial._id}>
                  <Testimonial testimonial={testimonial} />
                </Col>
              ))
            )}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Testimonials;
