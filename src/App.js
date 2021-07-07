import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { HashRouter, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
  );
}





export default App;
