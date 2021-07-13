import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './Components/NavBar';
import Home from './Contents/Home';
import About from './Contents/About';
import Education from './Contents/Education';
import Skills from './Contents/Skills';
import Contact from './Contents/Contact';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
    );
  }
  
  export default App;
