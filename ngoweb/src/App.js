import React from "react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Loginprofile from "./routes/Loginprofile";
import Registerprofile from "./routes/Registerprofile";
import { Navigate } from 'react-router-dom';
function App() {
  return (
    <>

<Routes>
<Route path="/" element={<Home/>} />
<Route path='/login' element={<Loginprofile />} /> 
<Route path='/register' element={<Registerprofile />} /> 
</Routes>


    </>
  )
}

export default App;