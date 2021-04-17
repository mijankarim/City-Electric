import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../Checkout/CheckoutForm';

const stripePromise = loadStripe('pk_test_51Ih6rcKIKnko8QH9UEOEQ0ymRNDKmnfeEdROUqZ0Pnj3wOkDbz5KLbu7prRywBAEOxgnJnmWYNKDNKJoDeihY3xt00ORVgWAEM');

const ProcessPayment = ({service}) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm service={service}/>
    </Elements>
  );
};

export default ProcessPayment;