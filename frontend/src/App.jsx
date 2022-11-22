import React from 'react';
import {useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Fantasy from './components/Fantasy';
import Cards from './components/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from "axios";

function App() {
  

  
  return (
    <>
      <Router>
        <Navbar />
        <Fantasy />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
