/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AdminHome from "../pages/AdminHome";
import AdminChat from "../pages/AdminChat";
import AdminRoute from "../routeGuards/AdminRoute";

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<AdminRoute />}>
           <Route path="/adminhome" element={<AdminHome />}></Route>
           <Route path="/adminchat" element={<AdminChat />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default AdminRouter;
