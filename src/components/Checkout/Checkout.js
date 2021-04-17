import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { Container, Row, Col, Table, Button, Spinner } from "react-bootstrap";
import CheckoutForm from "./CheckoutForm";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";

const Checkout = () => {
    const [loggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [service, setService] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5050/service/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setService(data);
            setIsLoading(false);
          });
      }, []);

    return (
        <Container>
          <Row>
            <Col sm={4}>
              <Sidebar/>
            </Col>
            <Col sm={8}>
            <h3>Checkout</h3>
            <ProcessPayment service={service}/>
            </Col>
          </Row>
            
        </Container>
    )
}

export default Checkout;
