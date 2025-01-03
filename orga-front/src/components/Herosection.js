// import React from 'react';
// import { Typography, Box, Container, Grid, Divider } from '@mui/material';

// import gardenerImage from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/f6618e38-0980-45d8-b184-dcee977ebfed.jpeg'; // Corrected path

// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       number: '1',
//       title: 'Sustainable Practices',
//       description: 'We use environmentally friendly and sustainable farming methods to produce the highest quality organic fertilizers.'
//     },
//     {
//       number: '2',
//       title: 'Locally Sourced Ingredients',
//       description: 'Our fertilizers are made from locally sourced, natural ingredients, supporting both local farmers and the environment.'
//     },
//     {
//       number: '3',
//       title: 'Proven Results',
//       description: 'Thousands of satisfied customers have experienced better plant growth and soil health using our organic fertilizers.'
//     }
//   ];
  

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '50px',
//         backgroundColor: '#55A44E',
//         color: '#fff'
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           {/* Text Content */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h4" color="#ffff">
//               Why Choose Us?
//             </Typography>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               The Reasons That You Should Contact Us
//             </Typography>
//             <Divider sx={{ width: '50px', height: '3px', backgroundColor: '#a5a5a5', mb: 3 }} />
//             <Box>
//               {reasons.map((reason) => (
//                 <Box key={reason.number} display="flex" alignItems="flex-start" mb={3}>
//                   <Typography
//                     variant="h4"
//                     sx={{ fontSize: '5rem', color: 'rgba(255, 255, 255, 0.1)', mr: 2 }}
//                   >
//                     {reason.number}
//                   </Typography>
//                   <Box>
//                     <Typography variant="h5" color="inherit">
//                       {reason.title}
//                     </Typography>
//                     <Typography variant="h6" color="grey.400">
//                       {reason.description}
//                     </Typography>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Grid>

//           {/* Image */}
//           <Grid item xs={12} md={6}>
//             <Box
//               component="img"
//               src={gardenerImage}
//               alt="Gardener holding flowers and a spray bottle"
//               sx={{
//                 width: '80%',
//                 borderRadius: 2
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseUs;

// import React from 'react';
// import  farmer from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/A farmer.jpeg'; // Corrected path
// import hero18 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero18.jpeg'; // Corrected path
// import hero10 from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/hero10.jpeg'; // Corrected path
// import gardenerImage from '/home/uki-jaffna/Documents/orga3/my-orga-frontend/src/img/farmer.jpeg'; // Corrected path


// const App = () => {
//   return (
//     <div style={{ maxWidth: '1200px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
//       {/* Header */}
//       <header style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#e3f2e3',
//         padding: '10px 20px',
//         borderRadius: '8px',
//         marginBottom: '20px'
//       }}>
//         <h1 style={{ fontSize: '1.5rem', color: '#4CAF50' }}>Orga</h1>
//         <div style={{ display: 'flex', gap: '10px', color: '#666', fontSize: '0.9rem' }}>
//           <span>Duolingo</span>
//           <span>Magic Leap</span>
//           <span>Microsoft</span>
//           <span>Codecov</span>
//           <span>User Testing</span>
//         </div>
//       </header>

//       {/* Search Bar */}
//       <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//         <h2 style={{ fontSize: '1.8rem', color: '#333' }}>Search Fertilizers</h2>
//         <div style={{
//           marginTop: '10px',
//           display: 'inline-flex',
//           alignItems: 'center',
//           border: '1px solid #ddd',
//           borderRadius: '20px',
//           overflow: 'hidden',
//           backgroundColor: '#fff'
//         }}>
//           <input
//             type="text"
//             placeholder="Search for organic fertilizers..."
//             style={{
//               border: 'none',
//               padding: '10px',
//               fontSize: '1rem',
//               outline: 'none',
//               width: '300px'
//             }}
//           />
//           <button style={{
//             backgroundColor: '#4CAF50',
//             color: '#fff',
//             border: 'none',
//             padding: '10px 20px',
//             fontSize: '1rem',
//             cursor: 'pointer',
//             borderRadius: '0 20px 20px 0'
//           }}>Search</button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ display: 'flex', gap: '40px' }}>
        
//         {/* Image Grid */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(2, 1fr)',
//           gap: '20px',
//           width: '40%'
//         }}>
//           <div><img src={farmer} alt="img1" style={{ width: '100%', borderRadius: '10px' }} /></div>
//           <div><img src={hero18} alt="img2" style={{ width: '100%', borderRadius: '10px' }} /></div>
//           <div><img src={hero10} alt="img3" style={{ width: '100%', borderRadius: '10px' }} /></div>
//           <div><img src={gardenerImage} alt="img4" style={{ width: '100%', borderRadius: '10px' }} /></div>
//         </div>

//         {/* Benefits Section */}
//         <div style={{ width: '60%' }}>
//           <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '20px' }}>Benefits of Shopping with Orga</h3>
          
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: '20px'
//           }}>
//             <span style={{ fontSize: '2rem', color: '#4CAF50', marginRight: '15px' }}>🌱</span>
//             <div>
//               <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#555' }}>Organic Fertilizers</h4>
//               <p style={{ margin: '5px 0 0 0', color: '#777' }}>High-quality organic fertilizers sourced from trusted suppliers.</p>
//             </div>
//           </div>

//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: '20px'
//           }}>
//             <span style={{ fontSize: '2rem', color: '#4CAF50', marginRight: '15px' }}>📦</span>
//             <div>
//               <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#555' }}>Fast Delivery</h4>
//               <p style={{ margin: '5px 0 0 0', color: '#777' }}>Get your products delivered to your doorstep quickly and safely.</p>
//             </div>
//           </div>

//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: '20px'
//           }}>
//             <span style={{ fontSize: '2rem', color: '#4CAF50', marginRight: '15px' }}>💡</span>
//             <div>
//               <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#555' }}>Expert Advice</h4>
//               <p style={{ margin: '5px 0 0 0', color: '#777' }}>Access guidance from agricultural experts on organic farming.</p>
//             </div>
//           </div>

//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: '20px'
//           }}>
//             <span style={{ fontSize: '2rem', color: '#4CAF50', marginRight: '15px' }}>📹</span>
//             <div>
//               <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#555' }}>1.5k+ Video Resources</h4>
//               <p style={{ margin: '5px 0 0 0', color: '#777' }}>Explore a vast library of educational content on organic farming.</p>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import farmer from '../../src/img/A farmer.jpeg'; // Corrected path
import hero18 from '../../src/img/hero18.jpeg'; // Corrected path
import hero10 from '../../src/img/hero10.jpeg'; // Corrected path
import gardenerImage from '../../src/img/farmer.jpeg'; // Corrected path
import { FaSeedling, FaShippingFast, FaLightbulb, FaVideo } from "react-icons/fa";

const App = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: 'auto', padding: '60px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Main Content */}
      <div style={{ display: 'flex', gap: '200px' , paddingTop:'90px'}}>
        
        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
          width: '120%'
        }}>
          <div><img src={farmer} alt="img1" style={{ width: '100%', borderRadius: '10px' }} /></div>
          <div><img src={hero18} alt="img2" style={{ width: '100%', borderRadius: '10px' }} /></div>
          <div><img src={hero10} alt="img3" style={{ width: '100%', borderRadius: '10px' }} /></div>
          <div><img src={gardenerImage} alt="img4" style={{ width: '100%', borderRadius: '10px' }} /></div>
        </div>

        {/* Benefits Section */}
<div style={{ width: '80%', padding: '1px' }}>
  <h3 style={{
    fontSize: '3rem', color: '#388E3C', marginBottom: '40px',
    fontFamily: '"Titan One", sans-serif',
  }}>
    Benefits of Shopping with Orga
  </h3>

  <div style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  }}>
    <FaSeedling style={{ fontSize: '3rem', color: '#4CAF50', marginRight: '15px' }} />
    <div>
      <h4 style={{ margin: 0, fontSize: '1.8rem', color: '#000', fontFamily: 'var(--bs-body-font-family)',   }}>Organic Fertilizers</h4>
      <p style={{ margin: '5px 0 0 0', color: '#777', fontSize: '1.5rem' , }}>
        High-quality organic fertilizers sourced from trusted suppliers.
      </p>
    </div>
  </div>

  <div style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  }}>
    <FaShippingFast style={{ fontSize: '3rem', color: '#4CAF50', marginRight: '15px' }} />
    <div>
      <h4 style={{ margin: 0, fontSize: '1.8rem', color: '#000',fontFamily: 'var(--bs-body-font-family)',  }}>Fast Delivery</h4>
      <p style={{ margin: '5px 0 0 0', color: '#777', fontSize: '1.5rem',  }}>
        Get your products delivered to your doorstep quickly and safely.
      </p>
    </div>
  </div>

  <div style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  }}>
    <FaLightbulb style={{ fontSize: '3rem', color: '#4CAF50', marginRight: '15px' }} />
    <div>
      <h4 style={{ margin: 0, fontSize: '1.8rem', color: '#000',fontFamily: 'var(--bs-body-font-family)',  }}>Expert Advice</h4>
      <p style={{ margin: '5px 0 0 0', color: '#777', fontSize: '1.5rem',  }}>
        Access guidance from agricultural experts on organic farming.
      </p>
    </div>
  </div>

  <div style={{
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  }}>
    <FaVideo style={{ fontSize: '3rem', color: '#4CAF50', marginRight: '15px' }} />
    <div>
      <h4 style={{ margin: 0, fontSize: '1.8rem', color: '#000',fontFamily: 'var(--bs-body-font-family)',  }}>1.5k+ Video Resources</h4>
      <p style={{ margin: '5px 0 0 0', color: '#777', fontSize: '1.5rem',  }}>
        Explore a vast library of educational content on organic farming.
      </p>
    </div>
  </div>

          
        </div>
      </div>
    </div>
  );
};

export default App;
