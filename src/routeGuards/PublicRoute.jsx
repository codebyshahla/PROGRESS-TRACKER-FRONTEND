/* eslint-disable no-undef */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken } from "../redux/reduxSlice";
// eslint-disable-next-line no-unused-vars

const AuthGuard = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
const Token = localStorage.getItem('jwtToken');

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return <div>{token && <Outlet />}</div>;
};

export default AuthGuard;
