/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../redux/reduxSlice";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        formData,
      });
      console.log("response from axios", response);
      console.log(response.data.token);
      const jwttoken = response.data.token;
      const role = response.data.role;
      console.log(role)
      localStorage.setItem("jwtToken", jwttoken);
      dispatch(setToken(jwttoken));
      if (response.status == 200 && role==='admin' ) {
       navigate('/admin/adminhome')
      }
      else if(role==='client'){
        navigate('/')
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center  h-screen bg-contain ">
      <div className="max-w-md w-full p-8 bg-white bg-transparent shadow-md rounded-md ">
        <h2 className="text-3xl font-semibold mb-6 text-black  text-center">
          Create an account for{" "}
          <span className="font-extrabold text-orange-500">Progress</span>
          <span className="font-extrabold text-black">Tracker</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-full bg-transparent placeholder:text-black  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-full bg-transparent placeholder:text-black  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign In
          </button>{" "}
          <br /> <br />
          <p>
            <Link to="/ForgotPassword">
              <span className="text-blue-500">Forgot Password</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
