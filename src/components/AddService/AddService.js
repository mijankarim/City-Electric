import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [success, setSuccess] = useState(false);
    const [uploading, setUploading] = useState('');
  
    const handleImageUpload = (e) => {
      const imageData = new FormData();
      setUploading('Image is uploading. Please wait...');
      imageData.set("key", "f1b234c6634087691b128af5c97f102f");
      imageData.append("image", e.target.files[0]);
      axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then((response) => {
          setImageURL(response.data.data.display_url);
          setUploading("Image uploaded Successfully!");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const onSubmit = (data, e) => {
      e.target.reset();
      const serviceData = {
        title: data.serviceTitle,
        price: data.servicePrice,
        description: data.serviceDescription,
        image: imageURL,
      };
      const url = `https://glacial-headland-56185.herokuapp.com/addService`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      }).then((res) => {
        if (res.ok) {
          setSuccess(true);
          setUploading('');
        }
      });
    };
  
    const handleOnfocus = () => {
      setSuccess(false);
    }
  
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <Sidebar/>
          </Col>
        <Col sm={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Row>
              <h3 className="mb-3 ml-3">Add Service</h3>
            </Row>
            <Row className="mb-3">
              <Col>
                <label>Service Title</label>
                <br />
                <input
                  className="form-control"
                  onFocus={handleOnfocus}
                  name="serviceTitle"
                  placeholder="Enter Title"
                  ref={register({ required: true })}
                />
                {errors.serviceTitle && <span>This field is required</span>}
              </Col>
              <Col>
              <label>Service Price</label>
                <br />
                <input
                  className="form-control"
                  onFocus={handleOnfocus}
                  name="servicePrice"
                  placeholder="Enter Price"
                  ref={register({ required: true })}
                />
                {errors.servicePrice && <span>This field is required</span>}
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Description</label>
                <br />
                <textarea
                  className="form-control"
                  name="serviceDescription"
                  placeholder="Enter Description"
                  ref={register({ required: true })}
                />
                {errors.serviceDescription && <span>This field is required</span>}
              </Col>
              <Col>
                <label>Upload Image</label>
                <br />
                <input
                  className="form-control"
                  name="serviceImage"
                  type="file"
                  onChange={handleImageUpload}
                  ref={register({ required: true })}
                />
                <span className="text-success">{uploading}</span>
                {errors.serviceImage && <span>This field is required</span>}
              </Col>
            </Row>
            <Button className="float-right my-3 food-btn" type="submit">
              Save
            </Button>
            {success && (
              <h4 className="text-success w-100 text-center mt-5">
                Service saved Successfully.
              </h4>
            )}
          </Container>
        </form>
        </Col>
        </Row>
      </Container>
    );
  };
  
  export default AddService;
