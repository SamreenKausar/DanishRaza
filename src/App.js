import React from 'react';
// import components
import AnimRoutes from './components/AnimRoutes';
// import Router
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
   return (
  <>
    <Router>
      <AnimRoutes/>
    </Router>
  </>
  );
};

export default App;
