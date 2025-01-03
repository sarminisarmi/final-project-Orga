// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const res = await axios.get('http://localhost:5002/api/contacts/fetch');
//         setContacts(res.data);
//       } catch (error) {
//         // Enhanced logging for debugging
//         if (error.response) {
//           console.error('Error response:', error.response.data);
//         } else if (error.request) {
//           console.error('Error request:', error.request);
//         } else {
//           console.error('Error message:', error.message);
//         }
//       }
//     };
//     fetchContacts();
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       <h2>Contact Submissions</h2>
//       {contacts.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Subject</th>
//               <th>Message</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.map((contact) => (
//               <tr key={contact._id}>
//                 <td>{contact.firstName}</td>
//                 <td>{contact.lastName}</td>
//                 <td>{contact.email}</td>
//                 <td>{contact.subject}</td>
//                 <td>{contact.message}</td>
//                 <td>{new Date(contact.createdAt).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No contact submissions found.</p>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch all contact submissions
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('http://localhost:5002/api/contacts/fetch');
        setContacts(res.data);
      } catch (error) {
        if (error.response) {
          console.error('Error response:', error.response.data);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    };
    fetchContacts();
  }, []);

  // // Delete a contact by ID
  // const handleDelete = async (id) => {
  //   if (!window.confirm('Are you sure you want to delete this contact?')) return;
  
  //   try {
  //     // Ensure you're using the correct backend URL
  //     const res = await axios.delete(`http://localhost:5002/api/contacts/delete/${id}`);
  //     if (res.status === 200) {
  //       alert('Contact deleted successfully');
  //       // Remove the deleted contact from the state
  //       setContacts(contacts.filter((contact) => contact._id !== id));
  //     }
  //   } catch (error) {
  //     console.error('Error deleting contact:', error.response || error.message);
  //     alert('Failed to delete contact. Please try again.');
  //   }
  // };
  

  return (
    <div className="admin-dashboard">
      
      {contacts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              {/* <th>Date</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
                <td>{new Date(contact.createdAt).toLocaleString()}</td>
                {/* <td>
                  <button onClick={() => handleDelete(contact._id)} style={{ color: 'white', cursor: 'pointer' }}>
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contact submissions found.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
