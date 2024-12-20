import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from './Pages/Login';
import axios from 'axios';

function App() {
  useEffect(() =>{
    axios.defaults.withCredentials = true;
  },[])
  return (
    <>
      <Login />
    </>
  );
}

export default App;
