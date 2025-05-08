import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FocusMode from "./pages/FOCUS";
import FrontPage from "./pages/FrontPage";
import Login from "./pages/Login";
import MyHealth from "./pages/MyHealth";
import Register from "./pages/register"; // Capital 'R'
import PomodoroTimer from "./pages/timer";
const App=()=> {

  

  return (
    <>
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/PomodoroTimer" element={<PomodoroTimer/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/FocusMode" element={<FocusMode/>}/>
      <Route path="/MyHealth" element={<MyHealth/>}/>


    </Routes>
    </>

  );
}

export default App;
