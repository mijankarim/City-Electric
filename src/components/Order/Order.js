import React from "react";
import {Col} from 'react-bootstrap';

const Order = (props) => {
    const {title, price, image, description} = props.order;
  return (
    
      
        <Col sm={4}> 
        <h4>{title}</h4>
        <p>{description}</p>
        </Col>
      
        
  );
};

export default Order;