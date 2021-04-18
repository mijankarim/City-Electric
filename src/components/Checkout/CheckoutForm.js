import React, { useMemo, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button } from "react-bootstrap";
import { UserContext } from "../../App";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const CheckoutForm = ({ service }) => {
  const [loggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const { title, price, description, image } = service;
  const { userName, email } = loggedInUser;

  const handlePayment = async (data, event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (payload.error) {
      setPaymentError(payload.error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(payload.paymentMethod.id);
      setPaymentError(null);
      const orderDetails = {
        title,
        price,
        description,
        image,
        userName,
        email,
        status: "pending",
        paymentId: payload.paymentMethod.id,
        cardBrand: payload.paymentMethod.card.brand,
        last4: payload.paymentMethod.card.last4,
      };

      fetch("https://glacial-headland-56185.herokuapp.com/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
          }
        });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handlePayment)} className="checkout-form">
        <Row>
          <Col>
            <label>Your Name</label>
            <br />
            <input
              className="form-control"
              name="userName"
              value={`${loggedInUser.userName}`}
              ref={register({ required: true })}
              readOnly
            />
          </Col>
          <Col>
            <label>Your Email</label>
            <br />
            <input
              className="form-control"
              name="email"
              value={`${loggedInUser.email}`}
              ref={register({ required: true })}
              readOnly
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Your Service</label>
            <br />
            <input
              className="form-control"
              name="serviceName"
              defaultValue={`${title}`  || 'Electrical installation'}
              ref={register({ required: true })}
              
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              Card number
              <CardNumberElement options={options} />
            </label>
          </Col>

          <Col>
            <label>
              Expiration date
              <CardExpiryElement options={options} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <label>
              CVC
              <CardCvcElement options={options} />
            </label>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="mt-2">Your Service Change Will be ${price}</p>
          </Col>
          <Col>
            <Button type="submit" disabled={!stripe} className="float-right">
              Pay Now
            </Button>
          </Col>
        </Row>
      </form>
      {paymentError && <p>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Thank you for your order</p>
      )}
    </Container>
  );
};

export default CheckoutForm;
