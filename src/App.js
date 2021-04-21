import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar } from './components';
import Home from './pages/HomePage/Home';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
      </Router>
        
    
  );
}

export default App;
