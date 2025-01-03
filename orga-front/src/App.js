


// App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserRoutes from './components/userRoutes.js';
// import Navbar from './components/Navbar.js'
// import Dashboard from './components/Dashboard';


// const App = () => {
//   return (
    
//         <Router>
//         {/* <Navbar /> */}
//           <Routes>
//             <Route path="/*" element={<UserRoutes />} />
//             <Route path="/Dashboard/*" element={<Dashboard />} />
//           </Routes>
//         </Router>
     
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './components/userRoutes.js';
import Dashboard from './components/Dashboard.js';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;


