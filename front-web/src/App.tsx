import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import './App.css'



const App = ()=>{
  return(
     <>
       <Routes />
       <ToastContainer />
    </>
  )
}

export default App;
