import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Order from "../Order/Order";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const { userName, email } = loggedInUser;

  useEffect(() => {
    fetch(`https://glacial-headland-56185.herokuapp.com/orders?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
        setIsLoading(false);
      });
  }, [email]);
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>{" "}
        <Col sm={8}>
          <Container className="bg-light py-5">
            
            {isLoading ? (
              <div className="d-flex align-items-center justify-content-center loader">
                <Spinner animation="border" variant="danger" />
              </div>
            ) : (
              <Row>
                <Col>
                  {orders.length === 0 ? (
                    <div className="text-dark text-center w-100 py-5">
                      <h3>No Orders Found</h3>
                    </div>
                  ) : (
                    orders.map((order, index) => (
                      <Order order={order} key={index} index={index} />
                    ))
                  )}
                </Col>
              </Row>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Orders;
