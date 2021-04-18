import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Testimonial.css";

const Testimonial = (props) => {
  const { name, companyName, description, image } = props.testimonial;
  return (
    <>
      <p>"{description}"</p>
      <div className="d-flex">
        <img src={image} alt={name} className="user-image" />

        <p>
          {name} <br /> {companyName}
        </p>
      </div>
    </>
  );
};

export default Testimonial;
