import React from "react";
import {Row, Col} from 'react-bootstrap';

const Order = (props) => {
    const {title, price, image, description} = props.order;
  return (
    
      <Row>
        <Col sm={4}> 
        <h4>{title}</h4>
        <p>{description}</p>
        </Col>
       
      </Row>
        
  );
};

export default Order;