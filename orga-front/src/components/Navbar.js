


// import React, { useContext, useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaShoppingCart, FaBars, FaTimes, FaHome, FaUser, FaEnvelope, FaBoxOpen, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import { useCart } from '../context/cartcontextprovider';
// import { AuthContext } from '../context/AuthContext';
// import logo from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/ORGA.png'
// const CustomNavbar = () => {
//   const { cart } = useCart();
//   const { user, logoutUser } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const styles = {
//     navbar: {
//       backgroundColor: '#4CAF50',
//       color: '#EDEDED',
//       padding: '0.5rem 2rem',
//       height:'80px',
//       transition: 'all 0.3s ease',
//       boxShadow: isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none',
//     },
//     logo: {
//       marginLeft: '1rem',
//       display: 'flex',
//       alignItems: 'center',
//     },
//     navLinks: {
//       display: 'flex',
//       justifyContent: 'center',
//       flex: 1,
//     },
//     navLink: {
//       color: '#fff',
//       textDecoration: 'none',
//       fontSize: '22px',
//       padding: '0 1rem',
//       fontWeight: 'bold',
//       margin: '0.5rem',
//       borderRadius: '25px',
//       transition: 'background-color 0.3s ease',
//     },
//     activeNavLink: {
//       backgroundColor: '#81C784',
//       color: '#000000',
//     },
//     hoverEffect: {
//       ':hover': {
//         backgroundColor: '#66BB6A',
//       },
//     },
//     actions: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '1rem',
//       marginRight: '1rem',
//     },
//     cartIcon: {
//       position: 'relative',
//       fontSize: '24px',
//       color: '#fff',
//     },
//     cartCount: {
//       position: 'absolute',
//       top: '-10px',
//       right: '-10px',
//       backgroundColor: '#EDEDED',
//       color: '#4CAF50',
//       borderRadius: '50%',
//       padding: '2px 6px',
//       fontSize: '14px',
//       fontWeight: 'bold',
//     },
//   };

//   return (
//     <Navbar expand="lg" style={styles.navbar} fixed="top">
//       <div style={styles.logo}>
//         <Navbar.Brand as={Link} to="/">
//           <img src={logo} alt="Orga Logo" width="120px" height="90px" />
//         </Navbar.Brand>
//       </div>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//         {isMenuOpen ? <FaTimes /> : <FaBars />}
//       </Navbar.Toggle>
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto" style={styles.navLinks}>
//           <Nav.Link as={Link} to="/" style={{ ...styles.navLink, ...(location.pathname === '/' ? styles.activeNavLink : {}), ...styles.hoverEffect }}>
//             <FaHome style={{ marginRight: '0.5rem' }} /> Home
//           </Nav.Link>
//           <Nav.Link as={Link} to="/product" style={{ ...styles.navLink, ...(location.pathname === '/product' ? styles.activeNavLink : {}), ...styles.hoverEffect }}>
//             <FaBoxOpen style={{ marginRight: '0.5rem' }} /> Products
//           </Nav.Link>
//           <Nav.Link as={Link} to="/about" style={{ ...styles.navLink, ...(location.pathname === '/about' ? styles.activeNavLink : {}), ...styles.hoverEffect }}>
//             <FaUser style={{ marginRight: '0.5rem' }} /> About Us
//           </Nav.Link>
//           <Nav.Link as={Link} to="/contact" style={{ ...styles.navLink, ...(location.pathname === '/contact' ? styles.activeNavLink : {}), ...styles.hoverEffect }}>
//             <FaEnvelope style={{ marginRight: '0.5rem' }} /> Contact
//           </Nav.Link>
//         </Nav>
//         <div style={styles.actions}>
//           {!user ? (
//             <Nav.Link as={Link} to="/register" style={{ ...styles.navLink, ...(location.pathname === '/register' ? styles.activeNavLink : {}), ...styles.hoverEffect }}>
//               <FaUserPlus style={{ marginRight: '0.5rem' }} /> Sign Up
//             </Nav.Link>
//           ) : (
//             <Button
//               onClick={() => {
//                 logoutUser();
//                 setIsMenuOpen(false);
//               }}
//               style={{ backgroundColor: '#FF6C6C', color: '#fff', border: 'none' }}
//             >
//               <FaSignOutAlt style={{ marginRight: '0.5rem' }} /> Logout
//             </Button>
//           )}
//           <Nav.Link as={Link} to="/cart" style={styles.cartIcon}>
//             <FaShoppingCart />
//             {Array.isArray(cart) && cart.length > 0 && (
//               <span style={styles.cartCount}>{cart.length}</span>
//             )}
//           </Nav.Link>
//         </div>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default CustomNavbar;





import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaHome, FaUser, FaEnvelope, FaBoxOpen, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useCart } from '../context/cartcontextprovider';
import { AuthContext } from '../context/AuthContext';
import logo from '../../src/img/ORGA.png';

const CustomNavbar = () => {
  const { cart, setCart } = useCart();
  const { user, logoutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navbar: {
      backgroundColor: '#4CAF50',
      color: '#EDEDED',
      padding: '0.5rem 2rem',
      height: '80px',
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none',
    },
    logo: {
      marginLeft: '1rem',
      display: 'flex',
      alignItems: 'center',
    },
    navLinks: {
      display: 'flex',
      justifyContent: 'center',
      flex: 1,
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '22px',
      padding: '0 1rem',
      fontWeight: 'bold',
      margin: '0.5rem',
      borderRadius: '25px',
      transition: 'background-color 0.3s ease',
    },
    activeNavLink: {
      backgroundColor: '#765827',
      color: '#fff',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginRight: '1rem',
    },
    cartIcon: {
      position: 'relative',
      fontSize: '24px',
      color: '#fff',
    },
    cartCount: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      backgroundColor: '#EDEDED',
      color: '#4CAF50',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '14px',
      fontWeight: 'bold',
    },
  };

  return (
    <Navbar expand="lg" style={styles.navbar} fixed="top">
      <div style={styles.logo}>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Orga Logo" width="120px" height="90px" />
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={styles.navLinks}>
          <Nav.Link as={Link} to="/" style={{ ...styles.navLink, ...(location.pathname === '/' ? styles.activeNavLink : {}) }}>
            <FaHome style={{ marginRight: '0.5rem' }} /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/product" style={{ ...styles.navLink, ...(location.pathname === '/product' ? styles.activeNavLink : {}) }}>
            <FaBoxOpen style={{ marginRight: '0.5rem' }} /> Products
          </Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ ...styles.navLink, ...(location.pathname === '/about' ? styles.activeNavLink : {}) }}>
            <FaUser style={{ marginRight: '0.5rem' }} /> About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{ ...styles.navLink, ...(location.pathname === '/contact' ? styles.activeNavLink : {}) }}>
            <FaEnvelope style={{ marginRight: '0.5rem' }} /> Contact
          </Nav.Link>
        </Nav>
        <div style={styles.actions}>
          {!user ? (
            <Nav.Link as={Link} to="/register" style={styles.navLink}>
              <FaUserPlus style={{ marginRight: '0.5rem' }} /> Sign Up
            </Nav.Link>
          ) : (
            <Button
              onClick={() => {
                logoutUser();
                setCart([]); // Clear cart on logout
                setIsMenuOpen(false);
              }}
              style={{ backgroundColor: '#765827', color: '#fff', border: 'none' }}
            >
              <FaSignOutAlt style={{ marginRight: '0.5rem' }} /> Logout
            </Button>
          )}
          <Nav.Link as={Link} to="/cart" style={styles.cartIcon}>
            <FaShoppingCart />
            {Array.isArray(cart) && cart.length > 0 && (
              <span style={styles.cartCount}>{cart.length}</span>
            )}
          </Nav.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
