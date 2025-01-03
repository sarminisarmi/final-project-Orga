import React, { createContext, useState,  } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null; 
  });

  const loginUser = (userData) => {
    setUser(userData);
    sessionStorage.setItem('user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    // Clear sessionStorage
    sessionStorage.clear();
    setUser(null); // Clear user state
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// import React, { createContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const loginUser = (userData) => {
//     setUser(userData);
//     sessionStorage.setItem('token', userData.token); // Save token to sessionStorage
//   };

//   const logoutUser = () => {
//     // Clear sessionStorage and localStorage
//     sessionStorage.removeItem('token');
//     sessionStorage.clear();
//     localStorage.clear();

//     // Reset user and redirect
//     setUser(null);
//     navigate('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
