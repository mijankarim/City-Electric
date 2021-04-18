import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const { userName, email } = loggedInUser;

  useEffect(() => {
    fetch(`https://glacial-headland-56185.herokuapp.com/ordersList`)
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
            <Row>
              <Col>
                <h3 className="mb-3">All Order</h3>
              </Col>
            </Row>
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
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Order No.</th>
                          <th>Customer Name</th>
                          <th>Email</th>
                          <th>Service</th>
                          <th>Pay With</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, index) => (
                         
                            <tr key={index} index={index}>
                              <td>{parseInt(`${order.index}`) + 1}</td>
                              <td>{order.userName}</td>
                              <td>{order.email} gm</td>
                              <td>{order.title}</td>
                              <td>$ {order.price}</td>
                              <td>$ {order.status}</td>
                            </tr>
                         
                        ))}
                      </tbody>
                    </Table>
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

export default OrdersList;
