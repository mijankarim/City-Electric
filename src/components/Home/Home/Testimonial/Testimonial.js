import React from "react";
import { Row, Col } from "react-bootstrap";

const Testimonial = (props) => {
  const { name, companyName, description, image } = props.testimonial;
  return (
    <div>
      <p>"{description}"</p>
      <Row>
          <Col sm={4}>
              <img src={image} alt={name}/>
          </Col>
        <Col sm={8}>
          <p>
            {name} <br /> {companyName}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonial;
