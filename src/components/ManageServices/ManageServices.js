import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Spinner } from "react-bootstrap";

import { FaTrashAlt } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    fetch("https://glacial-headland-56185.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, [services]);

  const handleDelete = (id) => {
    fetch(`https://glacial-headland-56185.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setDeleted(true);
        }
      });
  };

  return (
    <Container className="dashboard mt-5">
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8} className="py-5">
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center loader">
              <Spinner animation="border" variant="danger" />
            </div>
          ) : (
            <>
              <h3 className="mb-4">Manage Services</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Service Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service._id}>
                      <td>{service.title}</td>
                      <td>{service.description}</td>
                      <td>${service.price}</td>
                      <td className="text-center">
                        <Button
                          className="ml-2"
                          onClick={() => handleDelete(`${service._id}`)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {deleted && (
                <p className="text-success w-100 text-center my-3">
                  Services deleted Successfully
                </p>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ManageServices;
