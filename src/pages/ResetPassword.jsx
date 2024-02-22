import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/login',{formData})
    // Add your Login logic here
    console.log("Login form submitted:", formData);
   
    
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
              type="password"
              id="password"
              name="password"
              placeholder="ENTER NEW PASSWORD"
              value={formData.password}
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
              placeholder="CONFIRM PASSWORD"
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
           SET PASSWORD
          </button>{" "}
        </form>
      </div>
    </div>
  );
}
export default Login;

