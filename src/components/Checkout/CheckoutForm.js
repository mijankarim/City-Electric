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
  const [success, setSuccess] = useState(false);
  const { title, price } = service;
  
  const handlePayment = async (data, event) => {
    event.preventDefault(); 
    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", payload);
    if (payload.error) {
      setPaymentError(payload.error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(payload.paymentMethod.id);
      setPaymentError(null);

    }
    
    const orderDetails = {
      ...loggedInUser,
      ...service,
      paymentId: paymentSuccess 
    };

      fetch("https://glacial-headland-56185.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderDetails)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setSuccess(true);
        }
      });
      console.log(orderDetails); 


  };

  console.log(loggedInUser);

  return (
    <>
      <form onSubmit={handleSubmit(handlePayment)}>
        <label>Your Name</label>
        <br />
        <input
          className="form-control"
          name="userName"
          value={`${loggedInUser.userName}`}
          ref={register({ required: true })}
          readOnly
        />
        <label>Your Email</label>
        <br />
        <input
          className="form-control"
          name="email"
          value={`${loggedInUser.email}`}
          ref={register({ required: true })}
          readOnly
        />
        <label>Your Service</label>
        <br />
        <input
          className="form-control"
          name="serviceName"
          value={`${title}`}
          ref={register({ required: true })}
          readOnly
        />
        <label>
          Card number
          <CardNumberElement options={options} />
        </label>
        <br />
        <label>
          Expiration date
          <CardExpiryElement options={options} />
        </label>
        <br />
        <label>
          CVC
          <CardCvcElement options={options} />
        </label>
        <br />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <p>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Thank you for your order</p>
      )}
    </>
  );
};

export default CheckoutForm;
