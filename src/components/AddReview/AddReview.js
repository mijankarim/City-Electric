import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import { UserContext } from "../../App";

const AddReview = () => {
  const [loggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false);
  console.log(loggedInUser)
  const onSubmit = (data, e) => {
    e.target.reset();
    const reviewData = {
      name: data.name,
      companyName: data.companyName,
      description: data.description,
      image: loggedInUser.image
    };
    const url = `https://glacial-headland-56185.herokuapp.com/addReview`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
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
                <h3 className="mb-3 ml-3">Add Review</h3>
              </Row>
              <Row className="mb-3">
                <Col>
                  <label>Your Name</label>
                  <br />
                  <input
                    className="form-control"
                    onFocus={handleOnfocus}
                    name="name"
                    placeholder="Enter Your Name"
                    ref={register({ required: true })}
                  />
                  {errors.name && <span>This field is required</span>}
                </Col>
                <Col>
                  <label>Company Name, Designation</label>
                  <br />
                  <input
                    className="form-control"
                    onFocus={handleOnfocus}
                    name="companyName"
                    placeholder="Company Name, Designation"
                    ref={register({ required: true })}
                  />
                  {errors.companyName && <span>This field is required</span>}
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>Description</label>
                  <br />
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Enter Description"
                    ref={register({ required: true })}
                  />
                  {errors.description && <span>This field is required</span>}
                </Col>
              </Row>
              <Button className="float-right my-3 food-btn" type="submit">
                Save
              </Button>
              {success && (
                <h4 className="text-success w-100 text-center mt-5">
                  Review saved Successfully.
                </h4>
              )}
            </Container>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddReview;
