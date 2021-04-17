import React from "react";
import "./Service.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Service = (props) => {
  console.log(props.service);
  const { title, price, description, image, _id: id } = props.service;
  const history = useHistory();
  const handleClick = () => history.push(`checkout/${id}`);

  return (
    <div className="service">
      <img src={image} alt={title} />
      <h4 className="my-3">{title}</h4>
      <p>$ {price}</p>
      <p>{description}</p>
      <Button className="" onClick={handleClick}>
        Book Now
      </Button>
    </div>
  );
};

export default Service;
