import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";

const Checkout = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://glacial-headland-56185.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);

  return (
    <Container className="dashboard mt-5">
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9} className="py-5">
          <h3 className="mb-3">Book Service</h3>
          <ProcessPayment service={service} />
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
