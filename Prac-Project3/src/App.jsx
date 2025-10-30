import { useState, useContext } from 'react'
import './App.css'
import Card from './Components/Card';
import Input from './Components/Input';
import Button from './Components/Button';

function App() {

  return (
    <>
    <h1 className='font-bold text-3xl p-5'>Weather App</h1>
    <Input />
    <Button value="Search"/>
    <Card />
    <Button value="Refresh"/>
    </>
  );
}

export default App
