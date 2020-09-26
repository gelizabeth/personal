import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/about">
            
            <About />
          </Route>
          <Route path="/projects">
            
            <Projects />
          </Route>
          <Route path="/contact">
            
            <Contact />
          </Route>
          <Route exact path="/">
            
            <Redirect to='/about'/>
          </Route>
        </Switch>
        <Footer />
      </div>

    </Router>

  );
}

export default App;
