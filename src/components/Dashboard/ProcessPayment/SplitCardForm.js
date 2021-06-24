import React, { useMemo, useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";




const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = () => {
  const [paymentError,setPaymentError] = useState(null);
  const [paymentSuccess,setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
 // Block native form submission.
 event.preventDefault();

 if (!stripe || !elements) {
   // Stripe.js has not loaded yet. Make sure to disable
   // form submission until Stripe.js has loaded.
   return;
 }

 // Get a reference to a mounted CardElement. Elements knows how
 // to find your CardElement because there can only ever be one of
 // each type of element.
 const cardElement = elements.getElement(CardElement);

 // Use your card Element with other Stripe.js APIs
 const {error, paymentMethod} = await stripe.createPaymentMethod({
   type: 'card',
   card: cardElement,
 });

 if (error) {
   setPaymentError(error.message)
   // console.log('[error]', error);
   alert("wrong way");
   setPaymentSuccess(null);
 } else {
   setPaymentSuccess(paymentMethod.id)
   console.log('[PaymentMethod]', paymentMethod);
   setPaymentError(null);
  
 }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <button className="btn btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
      
    </form>
    
  );
};

export default SplitCardForm;
