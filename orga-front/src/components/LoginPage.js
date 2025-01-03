import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../utils/axios'; // Adjust the path according to your project
import { AuthContext } from '../context/AuthContext'; // Adjust the path for your AuthContext
import '../../src/components/Login Page.css'; // Ensure the correct path to your CSS file
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { email, password });
      const { token, role } = res.data;

      // Save token, role, and email to sessionStorage
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('role', role);
      sessionStorage.setItem('email', email);

      // Update AuthContext
      loginUser({ email, role });

      // Display success toast
      toast.success('Login successful!');

      // Check for post-login redirection
      const postLoginAction = sessionStorage.getItem("redirectAfterLogin");
      if (postLoginAction) {
        const { action } = JSON.parse(postLoginAction);
        if (action === "addToCart") {
          navigate("/product"); // Redirect to MenuPage
          return; // Exit to prevent further navigation
        }
      }

      // Navigate based on role if no post-login action
      if (role === 'admin') {
        navigate('/Dashboard');
      } else if (role === 'user') {
        navigate('/');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      toast.error(`Login failed: ${errorMessage}`);
    }
  };



  return (
    <div className="wrapper">
      <div className="login_box">
        <div className="login-header">
          <span>Login</span>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input_box">
            <input
              type="email"
              id="user"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="user" className="label">Email</label>
            <i className="bx bx-user icon"></i>
          </div>

          <div className="input_box">
            <input
              type="password"
              id="pass"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <label htmlFor="pass" className="label">Password</label>
            <i className="bx bx-lock-alt icon"></i>
          </div>

          <div className="input_box">
            <input type="submit" className="input-submit" value="Login" />
          </div>
        </form>

        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default Login;
