
import './Clothing.css'
import NavBar from "../../components/NavBar/NavBar"
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_live_NVYdvN5Tpu00aVyXWJaUwOPq00NmFmKats');


export default function Store() {

  const CheckoutForm = () => {
    return (
      <form>
        <PaymentElement />
        <button>Submit</button>
      </form>
    );
  };


  return (
    <div >

      <NavBar />  

    clothing
    <Elements stripe={stripePromise} >
      <CheckoutForm />
    </Elements>
    </div>
  )

  }

  
  