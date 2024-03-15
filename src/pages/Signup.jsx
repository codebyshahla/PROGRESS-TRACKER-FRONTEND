import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setToken } from "../redux/reduxSlice";

function Signup() {
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function validation() {
    const pass = formData.password;
    const confirmPass = formData.confirmPassword;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const test = regex.test(pass);
    const confirmTest = regex.test(confirmPass);

    console.log(test, confirmTest);
    if (test && confirmTest) {
      // Condition to check the confirm password === password

      setErrMsg("");
      // Function to submit the form
    }
    if (!test) {
      setErrMsg(
        "password must contain 8 characters with uppercase,lowercase,special character and number.."
      );
    } else if (pass !== confirmPass) {
      setErrMsg("password Doesnot match");
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend API to signup the user
      const response = await axios.post("http://localhost:5000/signup", {
        formData,
      });
      console.log(response.data.token);
      const jwttoken = response.data.token;
      console.log(jwttoken);
      localStorage.setItem("jwtToken", jwttoken);
      dispatch(setToken(jwttoken));
      console.log(response.data);
      if (response.data.error) {
        setErrMsg(response.data.error);
        console.log(errMsg);
      } else {
        if (response.data.role == "client") {
          navigate("/");
        } else {
          navigate('/admin/adminhome')
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

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
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-full bg-transparent  placeholder:text-black  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
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
          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-full bg-transparent  placeholder:text-black  focus:outline-none focus:border-blue-500"
              // onBlur={validation}
              required
            />
          </div>
          {/* <p id="msg" className="text-red-500"></p> */}
          <p className=" text-red-500">{errMsg}</p>
          <div className="mb-4">
            <input
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="mobile number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-full bg-transparent  placeholder:text-black  focus:outline-none focus:border-blue-500"
              // onBlur={validation}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-full bg-transparent focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Role</option>
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            onClick={validation}
            className="w-full py-2 px-4 bg-orange-500 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up
          </button>{" "}
          <br /> <br />
          <p>
            Already have an account? please{" "}
            <Link to="/login">
              <span className="text-blue-500">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
