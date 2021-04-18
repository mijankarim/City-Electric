import React from "react";
import { Col } from "react-bootstrap";

const Order = (props) => {
  const { title, price, image, description, status } = props.order;
  return (
    <Col sm={6}>
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div className="d-flex justify-content-between">
          <div>
            <img src={image} alt={title} className="order-image" />
          </div>
          <div>
            <p className="status">{status}</p>
          </div>
        </div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </Col>
  );
};

export default Order;
