

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { FaUsers, FaShoppingCart, FaBox, FaEnvelope, FaTachometerAlt, FaDollarSign } from 'react-icons/fa';
// import axios from 'axios';  // Ensure axios is set up to connect to your backend
// import Users from '../components/users.js';
// import Orders from '../components/Ordersmanagement.js';
// import Product from '../components/ProductManagement.js';
// import ContactUs from '../components/ContactUsManage.js';
// import Payment from '../components/payments Manage.js';
// import Navbar from '../components/Navbar.js';
// import { AuthProvider } from '../context/AuthContext.js';
// import { CartProvider } from '../context/cartcontextprovider';
// import ScrollToTop from './ScrollToTop.js';


// const AdminDashboard = ({ isAdmin = true }) => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [userCount, setUserCount] = useState(0);
//   const [orderCount, setOrderCount] = useState(0);
//   const [productCount, setProductCount] = useState(0);
//   const [contactCount, setContactCount] = useState(0);

//   useEffect(() => {
//     // Fetch user count
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5002/api/users/');
//         setUserCount(response.data.length);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     // Fetch order count
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:5002/api/order/');
//         setOrderCount(response.data.length);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     // Fetch product count
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5002/api/products');
//         setProductCount(response.data.length);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     // Fetch contact count
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5002/api/contacts/fetch');
//         setContactCount(response.data.length);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     // Call fetch functions
//     fetchUsers();
//     fetchOrders();
//     fetchProducts();
//     fetchContacts();
//   }, []);

//   const navItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt },
//     { id: 'users', label: 'Users', icon: FaUsers },
//     { id: 'orders', label: 'Orders', icon: FaShoppingCart },
//     { id: 'product', label: 'Products', icon: FaBox },
//     { id: 'contactUs', label: 'Contact Us', icon: FaEnvelope },
//     { id: 'payment', label: 'Payments', icon: FaDollarSign },
//   ];

//   const stats = [
//     { label: 'Total Users', value: userCount, icon: FaUsers },
//     { label: 'Total Orders', value: orderCount, icon: FaShoppingCart },
//     { label: 'Total Products', value: productCount, icon: FaBox },
//     { label: 'Total Contacts', value: contactCount, icon: FaEnvelope },
//   ];

//   const styles = {
//     container: {
//       display: 'flex',
//       minHeight: '100vh',
//       // backgroundColor: '#A28B55',
//       fontFamily: 'Arial, sans-serif',
//       paddingTop:'60px'
//     },
//     sidebar: {
//       width: '250px',
//       backgroundColor: '#4CAF50',
//       color: '#fff',
//       padding: '40px',
//       boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
//     },
//     sidebarTitle: {
//       fontSize: '1.8rem',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: '30px',
//     },
//     navList: {
//       listStyleType: 'none',
//       padding: 0,
//     },
//     navItem: {
//       marginBottom: '15px',
//     },
//     navLink: {
//       color: '#fff',
//       textDecoration: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       padding: '10px',
//       borderRadius: '8px',
//       transition: 'all 0.3s ease',
//     },
//     activeNavLink: {
//       backgroundColor: '#A28B55',
//       transform: 'translateX(10px)',
//     },
//     navIcon: {
//       marginRight: '10px',
//     },
//     content: {
//       flexGrow: 1,
//       padding: '40px',
//       borderRadius: '10px',
//       margin: '20px',
//       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//     },
//     contentTitle: {
//       color: '#65451F',
//       marginBottom: '30px',
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     statsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//       gap: '20px',
//     },
//     statCard: {
//       backgroundColor: '#4CAF50',
//       padding: '20px',
//       borderRadius: '10px',
//       color: '#fff',
//       boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//       textAlign: 'center',
//     },
//     statHeader: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '10px',
//     },
//     statLabel: {
//       fontSize: '1.2rem',
//       fontWeight: 'bold',
//     },
//     statIcon: {
//       fontSize: '2rem',
//     },
//     statValue: {
//       fontSize: '2rem',
//       fontWeight: 'bold',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.sidebar}>
//         <h2 style={styles.sidebarTitle}>Admin Dashboard</h2>
//         <nav>
//           <ul style={styles.navList}>
//             {navItems.map((item) => (
//               <li key={item.id} style={styles.navItem}>
//                 <Link
//                   to={`/Dashboard/${item.id}`}
//                   onClick={() => setActiveTab(item.id)}
//                   style={{
//                     ...styles.navLink,
//                     ...(activeTab === item.id ? styles.activeNavLink : {}),
//                   }}
//                 >
//                   <item.icon style={styles.navIcon} />
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//       <div style={styles.content}>
//         <h1 style={styles.contentTitle}>
//           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//         </h1>
//         {isAdmin && activeTab === 'dashboard' && (
//           <div style={styles.statsGrid}>
//             {stats.map((stat, index) => (
//               <div key={index} style={styles.statCard}>
//                 <div style={styles.statHeader}>
//                   <h3 style={styles.statLabel}>{stat.label}</h3>
//                   <stat.icon style={styles.statIcon} />
//                 </div>
//                 <p style={styles.statValue}>{stat.value.toLocaleString()}</p>
//               </div>
//             ))}
//           </div>
//         )}

// <AuthProvider>
// <CartProvider>
// <ScrollToTop />
// <Navbar />
//         <Routes>
//           <Route path="users" element={<Users />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="product" element={<Product />} />
//           <Route path="contactUs" element={<ContactUs />} />
//           <Route path="payment" element={<Payment />} />
//         </Routes>
//         </CartProvider>
//         </AuthProvider>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FaUsers, FaShoppingCart, FaBox, FaEnvelope, FaTachometerAlt, FaDollarSign, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';  
import Users from '../components/users.js';
import Orders from '../components/Ordersmanagement.js';
import Product from '../components/ProductManagement.js';
import ContactUs from '../components/ContactUsManage.js';
import Payment from '../components/payments Manage.js';
import Navbar from '../components/Navbar.js';
import { AuthProvider } from '../context/AuthContext.js';
import { CartProvider } from '../context/cartcontextprovider';
import ScrollToTop from './ScrollToTop.js';

const AdminDashboard = ({ isAdmin = true }) => {
  const navigate = useNavigate();  // Hook to navigate to another route
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);

  useEffect(() => {
    // Fetch user count
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/users/');
        setUserCount(response.data.length);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Fetch order count
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/order/');
        setOrderCount(response.data.length);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    // Fetch product count
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/products');
        setProductCount(response.data.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Fetch contact count
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/contacts/fetch');
        setContactCount(response.data.length);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    // Call fetch functions
    fetchUsers();
    fetchOrders();
    fetchProducts();
    fetchContacts();
  }, []);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt },
    { id: 'users', label: 'Users', icon: FaUsers },
    { id: 'orders', label: 'Orders', icon: FaShoppingCart },
    { id: 'product', label: 'Products', icon: FaBox },
    { id: 'contactUs', label: 'Contact Us', icon: FaEnvelope },
    { id: 'payment', label: 'Payments', icon: FaDollarSign },
  ];

  const stats = [
    { label: 'Total Users', value: userCount, icon: FaUsers },
    { label: 'Total Orders', value: orderCount, icon: FaShoppingCart },
    { label: 'Total Products', value: productCount, icon: FaBox },
    { label: 'Total Contacts', value: contactCount, icon: FaEnvelope },
  ];

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      paddingTop:'60px'
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '40px',
      boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
    },
    sidebarTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '30px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
    },
    navItem: {
      marginBottom: '15px',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    activeNavLink: {
      backgroundColor: '#A28B55',
      transform: 'translateX(10px)',
    },
    navIcon: {
      marginRight: '10px',
    },
    content: {
      flexGrow: 1,
      padding: '40px',
      borderRadius: '10px',
      margin: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
      color: '#65451F',
      marginBottom: '30px',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    },
    statCard: {
      backgroundColor: '#4CAF50',
      padding: '20px',
      borderRadius: '10px',
      color: '#fff',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    statHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    statIcon: {
      fontSize: '2rem',
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  };

  const handleLogout = () => {
    // Clear sessionStorage or other authentication state
    sessionStorage.clear(); // Example of clearing session storage
    navigate('/login');  // Redirect to login page after logout
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Dashboard</h2>
        <nav>
          <ul style={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id} style={styles.navItem}>
                <Link
                  to={`/Dashboard/${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    ...styles.navLink,
                    ...(activeTab === item.id ? styles.activeNavLink : {}),
                  }}
                >
                  <item.icon style={styles.navIcon} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={handleLogout}
            style={{
              ...styles.navLink,
              marginTop: '20px',
              backgroundColor: '#65451F',  // Example logout button color
            }}
          >
            <FaSignOutAlt style={styles.navIcon} />
            Logout
          </button>
        </nav>
      </div>
      <div style={styles.content}>
        <h1 style={styles.contentTitle}>
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h1>
        {isAdmin && activeTab === 'dashboard' && (
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <div style={styles.statHeader}>
                  <h3 style={styles.statLabel}>{stat.label}</h3>
                  <stat.icon style={styles.statIcon} />
                </div>
                <p style={styles.statValue}>{stat.value.toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}

        <AuthProvider>
          <CartProvider>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
              <Route path="product" element={<Product />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="payment" element={<Payment />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </div>
    </div>
  );
};

export default AdminDashboard;

