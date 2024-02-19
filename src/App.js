import React, { useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import FormAction from './Component/FormAction';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/form" element={<FormAction/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
