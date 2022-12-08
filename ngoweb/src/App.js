import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Loginprofile from "./routes/Loginprofile";
import Registerprofile from "./routes/Registerprofile";
function App() {
  return (
    <>
<Routes>
<Route path="/" element={<Home/>} />
<Route path='/login' element={<Loginprofile />} />
<Route path='/register' element={<Registerprofile />} />
</Routes>
    </>
  );
}

export default App;