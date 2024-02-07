
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your Login logic here
    console.log('Login form submitted:', formData);
  };
  return (
    <div  className="min-h-screen flex items-center justify-center  h-screen bg-contain ">
      <div className="max-w-md w-full p-8 bg-white bg-transparent shadow-md rounded-md ">
        <h2 className="text-3xl font-semibold mb-6 text-black  text-center">Create an account for <span className='font-extrabold text-orange-500'>Progress</span><span className='font-extrabold text-black'>Tracker</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              placeholder='Username'
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
              placeholder='Email'
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
              placeholder='password'
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
              placeholder='confirm password'
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-full bg-transparent  placeholder:text-black  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-500 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign In
          </button> <br /> <br />
        </form>
      </div>
    </div>
  );
}
export default Login;





