import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data, e) => {
    e.target.reset();
    const adminData = {
      email: data.email,
    };
    const url = `https://glacial-headland-56185.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => {
      if (res.ok) {
        setSuccess(true);
      }
    });
  };

  const handleOnfocus = () => {
    setSuccess(false);
  };

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container>
              <Row>
                <h3 className="mb-3 ml-3">Make Admin</h3>
              </Row>
              <Row className="mb-3">
                <Col>
                  <label>Email Address</label>
                  <br />
                  <input
                    className="form-control"
                    onFocus={handleOnfocus}
                    name="email"
                    placeholder="Email Address"
                    ref={register({ required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </Col>
              </Row>

              <Button className="float-right my-3 food-btn" type="submit">
                Submit
              </Button>
              {success && (
                <h4 className="text-success w-100 text-center mt-5">
                  Admin Added Successfully.
                </h4>
              )}
            </Container>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddAdmin;
