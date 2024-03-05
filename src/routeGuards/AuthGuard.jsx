/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken, setToken } from "../redux/reduxSlice";
// eslint-disable-next-line no-unused-vars

const AuthGuard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  useEffect(() => {
    console.log("token from authguard", token);
    if (!token) {
      if (localStorage.getItem("jwtToken")) {
        const jwttoken = localStorage.getItem("jwtToken");
        dispatch(setToken(jwttoken));
      } else {
        navigate("/login");
      }
    }
  }, [token]);

  return <div>{token && <Outlet />}</div>;
};

export default AuthGuard;
