/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
function Otp() {
  const [otpValues, setOtpValues] = useState(["", "", "", "","",""]);
  const otpRefs = [useRef(), useRef(), useRef(), useRef(),useRef(),useRef()];
  const [phoneNumber, setphoneNumber] = useState("");
  const [otp,setotp] = useState("");

  const handleChange = (index, value) => {
    setOtpValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;

      // Move focus to the next input field
      if (index < otpValues.length - 1 && value !== "") {
        otpRefs[index + 1].current.focus();
      }

      return newValues;
    });
  };

  const handleKeyPress = (index, event) => {
    if (event.key === "Enter") {
      // Move focus to the next input field or trigger validation
      if (index < otpValues.length - 1 && otpValues[index] !== "") {
        otpRefs[index + 1].current.focus();
      } else {
        // Trigger validation logic here
        // For now, just log the OTP values
        console.log("Validating OTP:", otpValues.join(""));
      }
    }
  };
  const Getotp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/forgotPassword", {
        phoneNumber
  
      });
    } catch (error) {
      console.error("error in seding otp", error);
    }
  };

  const ValidateOtp = async ()=>{
    try {
      console.log("Validating OTP:", otpValues.join(""));
      const response = await axios.post('http://localhost:5000/otpVerify',{
        otp
      })
    } catch (error) {
      console.log('an error occured')
    }
  }

  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">
            OTP Validation
          </h1>
          <label htmlFor="phoneNumber" className="text-left">
            Mobile Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            className="w-full p-1 border rounded mb-4"
            placeholder="Enter Phone Number"
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <button
            // onClick={() => console.log('Validating OTP:', otpValues.join(''))}
            onClick={Getotp}
            className="mt-6 bg-orange-400 text-white p-2 rounded w-full"
          >
            Send OTP
          </button>

          <label htmlFor="otp" className="text-left">
            Enter OTP
          </label>
          <div className="flex justify-around mb-4">
            {otpValues.map((value, index) => (
              <input
                key={index}
                ref={otpRefs[index]}
                type="text"
                className="w-9 p-1 border rounded"
                maxLength="1"
                value={value}
                onChange={(e) => {handleChange(index, e.target.value);
                  setotp(index,e.target.value)
                }}
                onKeyPress={(e) => handleKeyPress(index, e)}
                

              />
            ))}

          </div>
          <button
            onClick={ValidateOtp}
            className="mt-6 bg-orange-400 text-white p-2 rounded w-full"
          >
            <Link to="/ResetPassword">Validate OTP</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
