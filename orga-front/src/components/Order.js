


// // OrderPage.js
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../components/OrdersM.css';

// const OrderPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { totalPrice } = location.state || { cart: [], totalPrice: 0 };

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleOrder = async () => {
//     const orderData = {
//       customerName: name,
//       address,
//       phoneNumber,
//       totalPrice,
//     };

//     try {
//       const response = await axios.post('http://localhost:5002/api/order/orders', orderData);
//       return response.data;
//     } catch (error) {
//       console.error('Error saving order:', error);
//       alert('There was an error processing your order. Please try again.');
//       return null;
//     }
//   };

//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       const orderData = await handleOrder();
//       if (!orderData) return;

//       // Proceed with payment
//       alert('Order placed successfully!');
//       navigate('/paypalButton', { state: { totalPrice, orderID: orderData._id } });
//     } catch (error) {
//       console.error('Error during payment process:', error);
//       alert('Error during payment process. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="order-page">
//       <div className="order-container">
//         <h2>Payment Summary</h2>
//         <div className="order-summary">
//           <p><strong>Total Price:</strong> Rs {totalPrice}</p>
//         </div>

//         <div className="order-form">
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               placeholder="Enter your name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="address">Address:</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//               placeholder="Enter your address"
//               rows="3"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phoneNumber">Phone Number:</label>
//             <input
//               id="phoneNumber"
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//               placeholder="Enter your phone number"
//             />
//           </div>

//           <button className="confirm-button" onClick={handlePayment} disabled={loading}>
//             {loading ? 'Processing...' : 'Confirm Order'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderPage;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/components/o.css";

// const OrderPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { totalPrice } = location.state || { cart: [], totalPrice: 0 };

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleOrder = async () => {
//     const orderData = {
//       customerName: name,
//       address,
//       phoneNumber,
//       totalPrice,
//     };

//     try {
//       const response = await axios.post('http://localhost:5002/api/order/orders', orderData);
//       return response.data;
//     } catch (error) {
//       console.error('Error saving order:', error);
//       toast.error('There was an error processing your order. Please try again.');
//       return null;
//     }
//   };

//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       const orderData = await handleOrder();
//       if (!orderData) return;

//       // Proceed with payment
//       toast.success('Order placed successfully!');
//       navigate('/paypalButton', { state: { totalPrice, orderID: orderData._id } });
//     } catch (error) {
//       console.error('Error during payment process:', error);
//       toast.error('Error during payment process. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="order-page">
//       <ToastContainer />
//       <div className="order-container">
//         <h2>Payment Summary</h2>
//         <div className="order-summary">
//           <p><strong>Total Price:</strong> Rs {totalPrice}</p>
//         </div>

//         <div className="order-form">
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               placeholder="Enter your name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="address">Address:</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//               placeholder="Enter your address"
//               rows="3"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phoneNumber">Phone Number:</label>
//             <input
//               id="phoneNumber"
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//               placeholder="Enter your phone number"
//             />
//           </div>

//           <button className="confirm-button" onClick={handlePayment} disabled={loading}>
//             {loading ? 'Processing...' : 'Confirm Order'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderPage;


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
// import "./o.css"; // Update the correct path to your CSS file

// const OrderPage = () => {
//   const location = useLocation();
//   const { totalPrice } = location.state || { totalPrice: 0 };

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPayPalButton, setShowPayPalButton] = useState(false);

//   // Save order in the backend
//   const handleOrder = async () => {
//     const orderData = {
//       customerName: name,
//       address,
//       phoneNumber,
//       totalPrice,
//     };

//     try {
//       const response = await axios.post('http://localhost:5002/api/order/orders', orderData);
//       return response.data;
//     } catch (error) {
//       console.error('Error saving order:', error);
//       toast.error('There was an error processing your order. Please try again.');
//       return null;
//     }
//   };

//   // Handle payment and show PayPal button
//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       const orderData = await handleOrder();
//       if (!orderData) return;

//       // Show PayPal Button
//       toast.success('Order placed successfully!');
//       setShowPayPalButton(true);
//     } catch (error) {
//       console.error('Error during payment process:', error);
//       toast.error('Error during payment process. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="order-page">
//       <ToastContainer />
//       <div className="order-container">
//         <h2>Payment Summary</h2>
//         <div className="order-summary">
//           <p><strong>Total Price:</strong> Rs {totalPrice}</p>
//         </div>

//         <div className="order-form">
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               placeholder="Enter your name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="address">Address:</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//               placeholder="Enter your address"
//               rows="3"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phoneNumber">Phone Number:</label>
//             <input
//               id="phoneNumber"
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//               placeholder="Enter your phone number"
//             />
//           </div>

//           <button className="confirm-button" onClick={handlePayment} disabled={loading}>
//             {loading ? 'Processing...' : 'Confirm Order'}
//           </button>
//         </div>

//         {/* Show PayPal Button only after order is confirmed */}
//         {showPayPalButton && (
//           <div className="paypal-button-container">
//             <h3>Complete Payment</h3>
//             <PayPalScriptProvider
//               options={{
//                 "client-id": "AekNtOqaue-rDWKqAJj9no35ecpAsuWzdvMpHsB33EMm9FAZuK-knv4DHfNl0va1GMKxs_avJiXfN850",
//                 currency: "USD",
//               }}
//             >
//               <PayPalButtons
//                 createOrder={(data, actions) => {
//                   return actions.order.create({
//                     purchase_units: [
//                       {
//                         amount: {
//                           value: totalPrice.toFixed(2),
//                         },
//                       },
//                     ],
//                   });
//                 }}
//                 onApprove={(data, actions) => {
//                   return actions.order.capture().then((details) => {
//                     toast.success('Payment successful! Thank you for your purchase.');
//                     console.log('Payment details:', details);

//                     // Save payment details to backend
//                     fetch("http://localhost:5002/api/payments", {
//                       method: "POST",
//                       headers: {
//                         "Content-Type": "application/json",
//                       },
//                       body: JSON.stringify({
//                         orderId: details.id,
//                         payerId: details.payer.payer_id,
//                         amount: details.purchase_units[0].amount.value,
//                         currency: details.purchase_units[0].amount.currency_code,
//                         status: details.status,
//                       }),
//                     })
//                       .then((response) => response.json())
//                       .then((data) => {
//                         console.log('Payment saved to database:', data);
//                       })
//                       .catch((error) => {
//                         console.error('Error saving payment to database:', error);
//                         toast.error('Payment was successful, but an error occurred while saving it.');
//                       });
//                   });
//                 }}
//                 onError={(err) => {
//                   toast.error('An error occurred during the payment process. Please try again.');
//                   console.error('PayPal Checkout Error:', err);
//                 }}
//               />
//             </PayPalScriptProvider>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderPage;



import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./o.css"; // Update the correct path to your CSS file

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate hook
  const { totalPrice } = location.state || { totalPrice: 0 };

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPayPalButton, setShowPayPalButton] = useState(false);

  // Save order in the backend
  const handleOrder = async () => {
    const orderData = {
      customerName: name,
      address,
      phoneNumber,
      totalPrice,
    };

    try {
      const response = await axios.post('http://localhost:5002/api/order/orders', orderData);
      return response.data;
    } catch (error) {
      console.error('Error saving order:', error);
      toast.error('There was an error processing your order. Please try again.');
      return null;
    }
  };

  // Handle payment and show PayPal button
  const handlePayment = async () => {
    setLoading(true);
    try {
      const orderData = await handleOrder();
      if (!orderData) return;

      // Show PayPal Button
      toast.success('Order placed successfully!');
      setShowPayPalButton(true);
    } catch (error) {
      console.error('Error during payment process:', error);
      toast.error('Error during payment process. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-page">
      <ToastContainer />
      <div className="order-container">
        <h2>Payment Summary</h2>
        <div className="order-summary">
          <p><strong>Total Price:</strong> Rs {totalPrice}</p>
        </div>

        <div className="order-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter your address"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <button className="confirm-button" onClick={handlePayment} disabled={loading}>
            {loading ? 'Processing...' : 'Confirm Order'}
          </button>
        </div>

        {/* Show PayPal Button only after order is confirmed */}
        {showPayPalButton && (
          <div className="paypal-button-container">
            <h3>Complete Payment</h3>
            <PayPalScriptProvider
              options={{
                "client-id": "AekNtOqaue-rDWKqAJj9no35ecpAsuWzdvMpHsB33EMm9FAZuK-knv4DHfNl0va1GMKxs_avJiXfN850",
                currency: "USD",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: totalPrice.toFixed(2),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    toast.success('Payment successful! Thank you for your purchase.');
                    console.log('Payment details:', details);

                    // Save payment details to backend
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
                      .then((response) => response.json())
                      .then((data) => {
                        console.log('Payment saved to database:', data);
                      })
                      .catch((error) => {
                        console.error('Error saving payment to database:', error);
                        toast.error('Payment was successful, but an error occurred while saving it.');
                      });

                    // Redirect to the product page after successful payment
                    navigate('/product');  // Change this to the correct path for your product page
                  });
                }}
                onError={(err) => {
                  toast.error('An error occurred during the payment process. Please try again.');
                  console.error('PayPal Checkout Error:', err);
                }}
              />
            </PayPalScriptProvider>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
