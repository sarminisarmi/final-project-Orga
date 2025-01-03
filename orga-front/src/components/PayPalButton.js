

// PayPalButton.js
// import React from 'react';
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
// import { useLocation } from 'react-router-dom';

// const PayPalButton = () => {
//   const location = useLocation();
//   const { totalPrice } = location.state || { totalPrice: 0 };

//   const handleCreateOrder = (data, actions) => {
//     if (totalPrice && !isNaN(totalPrice)) {
//       return actions.order.create({
//         purchase_units: [{
//           amount: {
//             value: totalPrice.toFixed(2),
//             currency_code: "USD",
//           },
//         }],
//       });
//     } else {
//       console.error("Total price is undefined or not a valid number.");
//       throw new Error("Invalid total price");
//     }
//   };

//   const handleOnApprove = (data, actions) => {
//     return actions.order.capture().then((details) => {
//       console.log('Payment successful!', details);
//       alert('Payment successful! Thank you for your purchase.');
//     });
//   };

//   const handleOnError = (err) => {
//     console.error('PayPal Checkout Error:', err);
//     alert('An error occurred during the payment process. Please try again.');
//   };

//   return (
//     <PayPalScriptProvider options={{ "client-id": "AekNtOqaue-rDWKqAJj9no35ecpAsuWzdvMpHsB33EMm9FAZuK-knv4DHfNl0va1GMKxs_avJiXfN850", currency: "USD" }}>
//       <PayPalButtons
//         createOrder={handleCreateOrder}
//         onApprove={handleOnApprove}
//         onError={handleOnError}
//         style={{ layout: 'vertical' }}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalButton;
import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PayPalButton = () => {
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };

  // Define handleCreateOrder function
  const handleCreateOrder = (data, actions) => {
    if (totalPrice && !isNaN(totalPrice)) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: totalPrice.toFixed(2),
            currency_code: "USD",
          },
        }],
      });
    } else {
      console.error("Total price is undefined or not a valid number.");
      throw new Error("Invalid total price");
    }
  };

  // Define handleOnApprove function
  const handleOnApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log('Payment successful!', details);
      toast.success('Payment successful! Thank you for your purchase.');

      // Send payment details to backend
      fetch("http://localhost:5002/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: details.id,
          payerId: details.payer.payer_id,
          amount: details.purchase_units[0].amount.value,
          currency: details.purchase_units[0].amount.currency_code,
          status: details.status,
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log("Payment saved to database:", data);
      })
      .catch(error => {
        console.error("Error saving payment to database:", error);
        toast.error("Payment was successful, but an error occurred while saving it.");
      });
    });
  };

  // Define handleOnError function
  const handleOnError = (err) => {
    console.error('PayPal Checkout Error:', err);
    toast.error('An error occurred during the payment process. Please try again.');
  };

  return (
    <>
      <ToastContainer />
      <PayPalScriptProvider options={{ "client-id": "AekNtOqaue-rDWKqAJj9no35ecpAsuWzdvMpHsB33EMm9FAZuK-knv4DHfNl0va1GMKxs_avJiXfN850", currency: "USD" }}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
        <PayPalButtons
          createOrder={handleCreateOrder}
          onApprove={handleOnApprove}
          onError={handleOnError}
          style={{ layout: 'vertical' }}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default PayPalButton;
