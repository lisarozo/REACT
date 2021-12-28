import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About'
import ContactForm from './components/Contact';
import './index.css'
import Navbar from './components/Nav';
function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/aboutme" component={About}/>
    <Route exact path="/contact" component={ContactForm}/>
    </Switch>
    </Router>
  );
}

export default App;
