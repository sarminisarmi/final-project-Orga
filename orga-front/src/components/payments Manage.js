import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/api/payments")
      .then(response => response.json())
      .then(data => setPayments(data))
      .catch(error => console.error("Error fetching payments:", error));
  }, []);

  return (
    <div>
      {/* <h2>Payments</h2> */}
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Payer ID</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment.orderId}</td>
              <td>{payment.payerId}</td>
              <td>{payment.amount}</td>
              <td>{payment.currency}</td>
              <td>{payment.status}</td>
              <td>{new Date(payment.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;


