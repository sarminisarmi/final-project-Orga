// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../utils/axios';
// import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
// import { FaUserPlus } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import backgroundImage from '../../src/img/pexels-eva-bronzini-6261872.jpg';
// const RegisterPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!username || !email || !password) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5002/api/register', { username, email, password, role });
//       alert('Registration successful!');
//       navigate('/login');
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Registration failed: An error occurred';
//       alert(errorMessage);
//       console.error('Error during registration:', error);
//     }
//   };

//   return (
//     <Container
//       component="main"
//       maxWidth="xs"
//       className="d-flex align-items-center justify-content-center min-vh-100"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//       // backgroundPosition: 'center',
//       height: '100vh',
      
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       }}
//     >
//       <Paper
//         elevation={8}
//         className="p-4"
//         style={{
//           borderRadius: '16px',
//           boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//           background: 'rgba(255, 255, 255, 0.85)', // Slight transparency for contrast
//           padding: '1rem',
//         }}
//       >
//         <Box className="text-center mb-4">
//           <FaUserPlus style={{ fontSize: '2.5rem', color: '#4CAF50' }} />
//           <Typography
//             component="h1"
//             variant="h5"
//             style={{
//               color: '#333333',
//               fontWeight: '600',
//               marginTop: '0.5rem',
//             }}
//           >
//             Register
//           </Typography>
//         </Box>
//         <Box component="form" onSubmit={handleSubmit} noValidate>
//           <TextField
//             fullWidth
//             required
//             label="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             margin="normal"
//             style={{
//               backgroundColor: '#fafafa',
//               borderRadius: '8px',
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//             }}
//           />
//           <TextField
//             fullWidth
//             required
//             label="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             style={{
//               backgroundColor: '#fafafa',
//               borderRadius: '8px',
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//             }}
//           />
//           <TextField
//             fullWidth
//             required
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             margin="normal"
//             style={{
//               backgroundColor: '#fafafa',
//               borderRadius: '8px',
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//             }}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="success"
//             className="mt-4"
//             style={{
//               backgroundColor: '#4CAF50',
//               color: '#ffffff',
//               borderRadius: '8px',
//               padding: '10px 0',
//               fontSize: '1rem',
//               boxShadow: '0 4px 8px rgba(76, 175, 80, 0.4)',
//             }}
//           >
//             Register
//           </Button>

//           <Box className="text-center mt-3">
//             <Typography
//               variant="body2"
//               style={{ color: '#666666' }}
//             >
//               Already have an account?
//               <Button
//                 variant="text"
//                 color="primary"
//                 onClick={() => navigate('/login')}
//                 style={{
//                   padding: '0',
//                   fontSize: '1rem',
//                   color: '#4CAF50',
//                   fontWeight: '600',
//                 }}
//               >
//                 Go to Login
//               </Button>
//             </Typography>
//           </Box>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default RegisterPage;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../utils/axios';
// import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
// import { FaUserPlus } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import backgroundImage from '../../src/img/pexels-eva-bronzini-6261872.jpg';

// const RegisterPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!username || !email || !password) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5002/api/register', { username, email, password, role });
//       alert('Registration successful!');
//       navigate('/login');
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Registration failed: An error occurred';
//       alert(errorMessage);
//       console.error('Error during registration:', error);
//     }
//   };

//   return (
//     <Container
//       component="main"
//       disableGutters
//       className="d-flex align-items-center justify-content-center min-vh-100"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
        

        
//       }}
//     >
//       <Paper
//         elevation={8}
//         style={{
//           padding: '1.5rem',
//           maxWidth: '400px',
//           borderRadius: '16px',
//           backgroundColor: 'rgba(255, 255, 255, 0.85)', // Adds contrast against background
//           boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//         }}
//       >
//         <Box className="text-center mb-4">
//           <FaUserPlus style={{ fontSize: '2.5rem', color: '#4CAF50' }} />
//           <Typography
//             component="h1"
//             variant="h5"
//             style={{
//               color: '#333333',
//               fontWeight: '600',
//               marginTop: '0.5rem',
//             }}
//           >
//             Register
//           </Typography>
//         </Box>
//         <Box component="form" onSubmit={handleSubmit} noValidate>
//           <TextField
//             fullWidth
//             required
//             label="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             margin="normal"
//             style={{
//               backgroundColor: '#fafafa',
//               borderRadius: '8px',
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//             }}
//           />
//           <TextField
//             fullWidth
//             required
//             label="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             style={{
//               backgroundColor: '#fafafa',
//               borderRadius: '8px',
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//             }}
//           />
//           <TextField
//             fullWidth
//             required
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             margin="normal"
//             style={{
//               backgroundColor: '#fafafa',
//               borderRadius: '8px',
//               boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//             }}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="success"
//             className="mt-4"
//             style={{
//               backgroundColor: '#4CAF50',
//               color: '#ffffff',
//               borderRadius: '8px',
//               padding: '10px 0',
//               fontSize: '1rem',
//               boxShadow: '0 4px 8px rgba(76, 175, 80, 0.4)',
//             }}
//           >
//             Register
//           </Button>
//           <Box className="text-center mt-3">
//             <Typography
//               variant="body2"
//               style={{ color: '#666666' }}
//             >
//               Already have an account?
//               <Button
//                 variant="text"
//                 color="primary"
//                 onClick={() => navigate('/login')}
//                 style={{
//                   padding: '0',
//                   fontSize: '1rem',
//                   color: '#4CAF50',
//                   fontWeight: '600',
//                 }}
//               >
//                 Go to Login
//               </Button>
//             </Typography>
//           </Box>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default RegisterPage;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import { FaUserPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../../src/img/pexels-eva-bronzini-6261872.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await axios.post('http://localhost:5002/api/register', { username, email, password, role });
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed: An error occurred';
      toast.error(errorMessage);
      console.error('Error during registration:', error);
    }
  };

  return (
    <Container
      component="main"
      disableGutters
      maxWidth={false}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}
    >
      <Paper
        elevation={8}
        style={{
          padding: '1.5rem',
          maxWidth: '400px',
          width: '100%',
          borderRadius: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Adds contrast against background
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box className="text-center mb-4">
          <FaUserPlus style={{ fontSize: '2.5rem', color: '#4CAF50' }} />
          <Typography
            component="h1"
            variant="h5"
            style={{
              color: '#765827',
              fontWeight: '600',
              marginTop: '0.5rem',
            }}
          >
            Register
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            required
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            style={{
              backgroundColor: '#fafafa',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          />
          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            style={{
              backgroundColor: '#fafafa',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          />
          <TextField
            fullWidth
            required
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            style={{
              backgroundColor: '#fafafa',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            className="mt-4"
            style={{
              backgroundColor: '#4CAF50',
              border: '2px solid #481E14',
              color: '#fff',
              borderRadius: '8px',
              padding: '10px 0',
              fontSize: '1rem',
              boxShadow: '0 4px 8px rgba(76, 175, 80, 0.4)',
            }}
          >
            Register
          </Button>
          <Box className="text-center mt-3">
            <Typography
              variant="body2"
              style={{ color: '#666666' }}
            >
              Already have an account?
              <Button
                variant="text"
                color="primary"
                onClick={() => navigate('/login')}
                style={{
                  padding: '0',
                  fontSize: '1rem',
                  color: '#765827',
                  fontWeight: '600',
                }}
              >
                Go to Login
              </Button>
            </Typography>
          </Box>
        </Box>
      </Paper>
      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </Container>
  );
};

export default RegisterPage;
