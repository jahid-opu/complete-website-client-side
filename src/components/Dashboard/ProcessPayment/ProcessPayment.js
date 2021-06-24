import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(

'pk_test_51J3DV1LeHSH0Z5hYpUQH5CijTgHeknBD281DkX4ZdyTUXDUOG4zncssJgv9xMYmFtYVwkgROjpvvfqppbTMk1Wpg004y1ilIkV'
);

const ProcessPayment = ({handlePayment}) => {
  
  return (
    <Elements stripe={stripePromise}>
      {/* <SplitCardForm></SplitCardForm> */}
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};
export default ProcessPayment ;