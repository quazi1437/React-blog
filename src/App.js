import React from 'react';
import './App.css';
import Home from './containers/home';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactUs from "./containers/ContactUs";
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import Post from './containers/Post';
import Compose from './containers/Compose';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Hero />
      <Route path="/" exact component={Home}/>
      <Route path="/contact-us" component={ContactUs}/>
      <Route path="/post/:postid" component={Post}/>
      <Route path="/Compose31081437" component={Compose} />
    </div>
    </Router>
    
  );
}

export default App;
