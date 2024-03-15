/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Habit from "../pages/Habit";
import DietPlan from "../pages/DietPlan";
import TimeManagement from "../pages/TimeManagement";
import ShowHabits from "../pages/ShowHabits";
import HabitGraph from "../pages/HabitGraph";
import PersonalDietPlan from "../pages/PersonalDietPlan";
import NutritionistHome from "../pages/NutritionistHome";
import ClientChat from "../pages/ClientChat";
import AuthGuard from "../routeGuards/AuthGuard";
// import PublicRoute from "../routeGuards/PublicRoute"
function CommonRouter() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<PublicRoute/>}> */}
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* </Route> */}
        <Route path="/" element={<Home />}></Route>

        <Route path="/" element={<AuthGuard />}>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/resetPassword" element={<ResetPassword />}></Route>
          <Route path="/habit" element={<Habit />}></Route>
          <Route path="/TimeManagement" element={<TimeManagement />}></Route>
          <Route path="/dietPlan" element={<DietPlan />}></Route>
          <Route path="/showhabits" element={<ShowHabits />}></Route>
          <Route path="/habitgraph" element={<HabitGraph />}></Route>
          <Route
        path="/PersonalDietPlan"
            element={<PersonalDietPlan />}
          ></Route>
          <Route path="/NutritionistHome"element={<NutritionistHome />}></Route>
          <Route path="/ClientChat" element={<ClientChat />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default CommonRouter;
