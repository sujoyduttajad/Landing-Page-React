import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar } from './components';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <Navbar />
      </Router>
        
    
  );
}

export default App;
