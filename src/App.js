import React from "react";
import { Routes , Route , Navigate } from "react-router-dom";

import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/signup"   element={<SignUp/>}/>
      <Route path="/login"   element={<Login/>}/>
      <Route path="/" element={<Navigate  to="signup"/> }/>
      </Routes>
    </div>
  );
}

export default App;
