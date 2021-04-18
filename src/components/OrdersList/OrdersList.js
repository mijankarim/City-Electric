import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
import { UserContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const { userName, email } = loggedInUser;
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`https://glacial-headland-56185.herokuapp.com/ordersList`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, []);


  const handleChange = (id, e) => {
   console.log(e.target.value)
   const newStatus = {status: e.target.value};
   fetch(`https://glacial-headland-56185.herokuapp.com/update/${id}`, {
     method: 'PATCH',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(newStatus)
   })
   .then(res => res.json())
   .then(data => {
     console.log('updated');
   })
  }


  return (
    <Container>
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>{" "}
        <Col sm={9}>
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
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, index) => (
                          <tr key={index} index={index}>
                            <td>{parseInt(`${index}`) + 1}</td>
                            <td>{order.userName}</td>
                            <td>{order.email} gm</td>
                            <td>{order.title}</td>
                            <td>$ {order.price}</td>
                           
                            <td>
                              {status}
                              <select name="status" id="status" onChange={(e) =>handleChange(order._id, e)}>
                                <option value="Pending">Pending</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Done">Done</option>
                              </select>
                            </td>
                            <td></td>
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
