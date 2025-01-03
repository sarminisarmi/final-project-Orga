// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './LandingPage.js';
// import LoginPage from './LoginPage';
// import Footer from "./Footer";
// import RegisterPage from './RegisterPage';
// import ProductPage from './ProductPage';
// import Cart from './Cart';
// // import Dashboard from './components/Dashboard';
// import Navbar from './Navbar';
// import Order from './Order';
// import { AuthProvider } from'../context/AuthContext.js';
// import { CartProvider } from '../context/cartcontextprovider.js';
// import PayPalButton from './PayPalButton';
// import Contact from './ContactUs';
// import AboutPage from './AboutPage';
// import ScrollToTop from './ScrollToTop'; // Import ScrollToTop component

// const UserRoutes = () => {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Router>
//           <ScrollToTop /> {/* Add ScrollToTop inside Router */}
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/product" element={<ProductPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             {/* <Route path="/Dashboard/*" element={<Dashboard />} /> */}
//             <Route path="/Cart" element={<Cart />} />
//             <Route path="/Order" element={<Order />} />
//             <Route path="/paypalButton" element={<PayPalButton />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<AboutPage />} />
//           </Routes>
//           <Footer />
//         </Router>
//       </CartProvider>
//     </AuthProvider>
//   );
// };

// export default UserRoutes;



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import Footer from './Footer';
import RegisterPage from './RegisterPage';
import ProductPage from './ProductPage';
import Cart from './Cart';
import Navbar from './Navbar';
import Order from './Order';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/cartcontextprovider';
import PayPalButton from './PayPalButton';
import Contact from './ContactUs';
import AboutPage from './AboutPage';
import ScrollToTop from './ScrollToTop';

const UserRoutes = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/paypalButton" element={<PayPalButton />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
};

export default UserRoutes;
