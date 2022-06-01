import React from "react";
import { ToastContainer, toast } from 'react-toastify';

// import "./RazorpayButton.css";
const userdata = JSON.parse(localStorage.getItem('userData'));
const paymentApiUrl = `http://35.244.8.93:5011/api/users/cart/razorpay`;
const paymentSuccessApiUrl = `http://35.244.8.93:5011/api/users/cart/paymentsuccess`;

function Razorpay(props) {
  
  const payOrderHandler = (e) => {
    e.preventDefault();
    handlePayment();
  };
  return (
    <div>
      <button
        type="submit"
        class="btn btn-warning btn-theme font-lato fw-bold text-uppercase element-block mt-2"
        onClick={payOrderHandler}
      > Proceed to Checkout </button>
       <ToastContainer
               position="top-center"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />
    </div>
  );
}

async function handlePayment()
{
  try
  {
    //Getting the order id
    const resp = await (await fetch(paymentApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({
        inst_hash:userdata.inst_hash
      })
    })).json();

    if(!resp.success)
      throw Error(await resp.json());

    //Creating the razorpay options
    const razorpayOptions = {
      
      amount: resp.order.totalAmount,
      currency: "INR",
      name: "Speedlab",
      description: "Online payment",
      order_id: resp.order.orderId,
      handler: paymentSuccessHandler
    };

    //Creating the razorpay window
    const razorpayWindow = new window.Razorpay(razorpayOptions);
    razorpayWindow.on("payment.failed", (resp) => toast(resp.error.description));
    razorpayWindow.open();

  }
  catch(err)
  {
    console.log(err);
    toast("Payment failed");
  }
}

async function paymentSuccessHandler(razorpayResponse)
{
  try
  {
    const userdata = JSON.parse(localStorage.getItem('userData'));
    const instIds = userdata.user_inst_id;
  console.log(razorpayResponse.razorpay_signature);
    const resp = await (await fetch(paymentSuccessApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        orderId: razorpayResponse.razorpay_order_id,
        paymentId: razorpayResponse.razorpay_payment_id,
        signature: razorpayResponse.razorpay_signature,
        instId: instIds
      })
    })).json();

    if(!resp.success)
        throw Error(resp);

    //Showing success message    
    toast("Payment successful")
    window.location.reload(true);
  }
  catch(err)
  {
    console.log(err);
    toast("Payment verification failed");
    window.location.reload(true);
  }
  
}

export default Razorpay;
