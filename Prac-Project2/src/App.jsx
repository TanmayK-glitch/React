import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Coin from './Pages/Coin/Coin';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin/:coinId' element={<Coin />} />
    </Routes>
    </>
  );
}

export default App
