import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import ScrollToTop from './components/ScrollToTop';
import MetaPixel from './utils/MetaPixel';


function App() {

  return (
    <Router>
      <MetaPixel/>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
