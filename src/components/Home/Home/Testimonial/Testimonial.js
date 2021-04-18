import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Testimonial.css";

const Testimonial = (props) => {
  const { name, companyName, description, image } = props.testimonial;
  return (
    <div className="shadow p-3 mb-5 bg-body rounded">
      <p className="mb-4">"{description}"</p>
      <div className="d-flex">
        <img src={image} alt={name} className="user-image" />

        <p>
          {name} <br /> <span className="author">{companyName}</span>
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
