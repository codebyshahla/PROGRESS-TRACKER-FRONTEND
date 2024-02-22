/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Habit from "../pages/Habit";
function CommonRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
        <Route path="/resetPassword" element={<ResetPassword/>}></Route>
        <Route path="/habit" element={<Habit/>}></Route>
      </Routes> 
    </>
  );
}

export default CommonRouter;
