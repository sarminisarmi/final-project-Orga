// import React from 'react';
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {
//   const styles = {
//     footer: {
//       backgroundColor: '#1B8057',
//       color: '#EDE9A3',
//       padding: '3rem 0',
//       fontFamily: 'Arial, sans-serif',
//     },
//     container: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '0 1rem',
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '2rem',
//     },
//     section: {
//       animation: 'fadeIn 0.5s ease-in-out',
//     },
//     heading: {
//       fontSize: '1.5rem',
//       fontWeight: 'bold',
//       marginBottom: '1rem',
//       color: '#D7C37A',
//     },
//     text: {
//       marginBottom: '0.5rem',
//       display: 'flex',
//       alignItems: 'center',
//     },
//     icon: {
//       marginRight: '0.5rem',
//       color: '#55A44E',
//     },
//     list: {
//       listStyle: 'none',
//       padding: 0,
//     },
//     listItem: {
//       marginBottom: '0.5rem',
//     },
//     link: {
//       color: '#EDE9A3',
//       textDecoration: 'none',
//       transition: 'color 0.3s ease',
//       ':hover': {
//         color: '#D7C37A',
//       },
//     },
//     bottom: {
//       borderTop: '1px solid #55A44E',
//       marginTop: '2rem',
//       paddingTop: '1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       flexWrap: 'wrap',
//     },
//     socialLinks: {
//       display: 'flex',
//       gap: '1rem',
//     },
//     socialIcon: {
//       backgroundColor: '#55A44E',
//       color: '#EDE9A3',
//       width: '40px',
//       height: '40px',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '1.2rem',
//       transition: 'all 0.3s ease',
//       ':hover': {
//         backgroundColor: '#D7C37A',
//         transform: 'translateY(-3px)',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       },
//     },
//   };

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         <div style={styles.grid}>
//           <div style={styles.section}>
//             <h4 style={styles.heading}>Company Info</h4>
//             <p style={styles.text}>
//               <FaMapMarkerAlt style={styles.icon} /> Jaffna
//             </p>
//             <p style={styles.text}>
//               <FaPhone style={styles.icon} /> Phone: 0772639760
//             </p>
//             <p style={styles.text}>
//               <FaEnvelope style={styles.icon} /> Email: sarminis@1905gmail.com
//             </p>
//           </div>

//           <div style={styles.section}>
//             <h4 style={styles.heading}>Useful Links</h4>
//             <ul style={styles.list}>
//               <li style={styles.listItem}><a href="#" style={styles.link}>Home</a></li>
//               <li style={styles.listItem}><a href="#" style={styles.link}>About us</a></li>
//               <li style={styles.listItem}><a href="#" style={styles.link}>Services</a></li>
//               <li style={styles.listItem}><a href="#" style={styles.link}>Products</a></li>
//               <li style={styles.listItem}><a href="#" style={styles.link}>Contact</a></li>
//             </ul>
//           </div>

//           <div style={styles.section}>
//             <h4 style={styles.heading}>Newsletter</h4>
//             <p>Stay updated with our latest news and offers!</p>
//             <form style={{ marginTop: '1rem' }}>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 style={{
//                   width: '100%',
//                   padding: '0.5rem',
//                   marginBottom: '0.5rem',
//                   borderRadius: '4px',
//                   border: 'none',
//                 }}
//               />
//               <button
//                 type="submit"
//                 style={{
//                   backgroundColor: '#D7C37A',
//                   color: '#1B8057',
//                   border: 'none',
//                   padding: '0.5rem 1rem',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
//                   transition: 'background-color 0.3s ease',
//                   ':hover': {
//                     backgroundColor: '#EDE9A3',
//                   },
//                 }}
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div style={styles.bottom}>
//           <p>&copy; 2024 Orga. Shop responsibly!</p>
//           <div style={styles.socialLinks}>
//             <a href="#" style={styles.socialIcon}><FaTwitter /></a>
//             <a href="#" style={styles.socialIcon}><FaFacebookF /></a>
//             <a href="#" style={styles.socialIcon}><FaInstagram /></a>
//             <a href="#" style={styles.socialIcon}><FaLinkedinIn /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '3rem 0',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    section: {
      animation: 'fadeIn 0.5s ease-in-out',
    },
    heading: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ffff',
    },
    text: {
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      color:'#ffff',
      fontSize: '1.2rem',

    },
    icon: {
      marginRight: '0.5rem',
      color: '#765827',
      fontSize: '1.3rem',

    },
    list: {
      listStyle: 'none',
      padding: 0,
      fontSize: '1.2rem',

    },
    listItem: {
      marginBottom: '0.5rem',
    },
    link: {
      color: '#ffff',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    bottom: {
      borderTop: '1px solid #fff',
      marginTop: '3rem',
      paddingTop: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
    },
    socialIcon: {
      backgroundColor: '#fff',
      color: '#765827',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.6rem',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.section}>
            <h4 style={styles.heading}>Company Info</h4>
            <p style={styles.text}>
              <FaMapMarkerAlt style={styles.icon} /> Jaffna
            </p>
            <p style={styles.text}>
              <FaPhone style={styles.icon} /> Phone: 0772639760
            </p>
            <p style={styles.text}>
              <FaEnvelope style={styles.icon} /> Email: sarminis@1905gmail.com
            </p>
          </div>

          <div style={styles.section}>
            <h4 style={styles.heading}>Useful Links</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}><Link to="/" style={styles.link}>Home</Link></li>
              <li style={styles.listItem}><Link to="/about" style={styles.link}>About Us</Link></li>

              <li style={styles.listItem}><Link to="/product" style={styles.link}>Products</Link></li>
              <li style={styles.listItem}><Link to="/contact" style={styles.link}>Contact</Link></li>
            </ul>
          </div>

          <div style={styles.section}>
            <h4 style={styles.heading}>Newsletter</h4>
            <p style={{ marginTop: '1rem', fontSize: '1.2rem'}}>Stay updated with our latest news and offers!</p>
            <form style={{ marginTop: '2rem', fontSize: '1.5rem'}}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginBottom: '0.5rem',
                  borderRadius: '4px',
                  border: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  border: '2px solid #388E3C',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  fontSize: '1rem'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={{ marginTop: '2rem', fontSize: '1.5rem'}}>&copy; 2024 Orga. Shop responsibly!</p>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialIcon}><FaTwitter /></a>
            <a href="#" style={styles.socialIcon}><FaFacebookF /></a>
            <a href="#" style={styles.socialIcon}><FaInstagram /></a>
            <a href="#" style={styles.socialIcon}><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
