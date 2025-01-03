// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './OrdersM.css'; // Ensure correct import path

// // const Orders = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5002/api/order/'); // Removed trailing slash
// //         console.log('Fetched orders:', response.data);
// //         setOrders(response.data);
// //       } catch (err) {
// //         console.error('Error fetching orders:', err);
// //         setError('Failed to fetch orders.');
// //       }
// //     };
   
// //     fetchOrders();
// //   }, []);

// //   const deleteOrder = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:5002/api/order/${id}`);
// //       setOrders(orders.filter(order => order._id !== id));
// //     } catch (err) {
// //       console.error('Error deleting order:', err);
// //       setError('Failed to delete order.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Manage Orders</h1>
// //       {error && <p style={{ color: 'red' }}>{error}</p>}
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Order ID</th>
// //             <th>Products</th>
// //             <th>Total Price</th>
// //             <th>Status</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {orders.map(order => (
// //             <tr key={order._id}>
// //               <td>{order._id}</td>
// //               <td>
// //                 {order.products.map((item, index) => (
// //                   <div key={index}>
// //                     {item.product ? item.product.name : 'N/A'} - Quantity: {item.quantity}
// //                   </div>
// //                 ))}
// //               </td>
// //               <td>₹{order.totalPrice}</td>
// //               <td>{order.status}</td>
// //               <td>
// //                 <button onClick={() => deleteOrder(order._id)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Orders;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './OrdersM.css'; // Ensure correct import path

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); // Track current page
//   const itemsPerPage = 10; // Limit to 10 items per page

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:5002/api/order/');
//         console.log('Fetched orders:', response.data);
//         setOrders(response.data);
//       } catch (err) {
//         console.error('Error fetching orders:', err);
//         setError('Failed to fetch orders.');
//       }
//     };
   
//     fetchOrders();
//   }, []);

//   // Handle page change
//   const nextPage = () => {
//     if (currentPage * itemsPerPage < orders.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const previousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const deleteOrder = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5002/api/order/${id}`);
//       setOrders(orders.filter(order => order._id !== id));
//     } catch (err) {
//       console.error('Error deleting order:', err);
//       setError('Failed to delete order.');
//     }
//   };

//   // Pagination logic
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const selectedOrders = orders.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div>
//       <h1>Manage Orders</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Products</th>
//             <th>Total Price</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {selectedOrders.map(order => (
//             <tr key={order._id}>
//               <td>{order._id}</td>
//               <td>
//                 {order.products.map((item, index) => (
//                   <div key={index}>
//                     {item.product ? item.product.name : 'N/A'} - Quantity: {item.quantity}
//                   </div>
//                 ))}
//               </td>
//               <td>₹{order.totalPrice}</td>
//               <td>{order.status}</td>
//               <td>
//                 <button onClick={() => deleteOrder(order._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         <button onClick={previousPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>Page {currentPage}</span>
//         <button onClick={nextPage} disabled={currentPage * itemsPerPage >= orders.length}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Orders;


// Orders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrdersM.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/order/');
        console.log('Fetched orders:', response.data);
        setOrders(response.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to fetch orders.');
      }
    };

    fetchOrders();
  }, []);

  const nextPage = () => {
    if (currentPage * itemsPerPage < orders.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const deleteOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/api/order/${id}`);
      setOrders(orders.filter(order => order._id !== id));
    } catch (err) {
      console.error('Error deleting order:', err);
      setError('Failed to delete order.');
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* <h1>Manage Orders</h1> */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedOrders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.customerName}</td>
              <td>{order.address}</td>
              <td>{order.phoneNumber}</td>
              <td>₹{order.totalPrice}</td>
              <td>
                <button onClick={() => deleteOrder(order._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={previousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage * itemsPerPage >= orders.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Orders;
