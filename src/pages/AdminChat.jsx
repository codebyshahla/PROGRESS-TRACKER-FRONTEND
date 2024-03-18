/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import io from 'socket.io-client';
import { selectToken, setToken } from "../redux/reduxSlice";
import {  useDispatch, useSelector } from 'react-redux';



function AdminChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const token = useSelector(selectToken);
  const dispatch = useDispatch(); // Get dispatch function from Redux

  useEffect(() => {
    const socket = io('http://localhost:3000', { transports: ["websocket"] });
    const fetchData = async () => {
         console.log(token , "  : token");
      try {
        if (!token) {
          if (localStorage.getItem("jwtToken")) {
            const jwtToken = localStorage.getItem("jwtToken");
            dispatch(setToken(jwtToken));
            const response = await axios.get("http://localhost:5000/getMail", {
              headers: {
                Authorization: `Bearer ${jwtToken}` // Use jwtToken here instead of token
              }
            });
            console.log(response.data); // Log or set the response data
          }
        }
      } catch (error) {
        console.error("Error fetching role:", error);
      }
    };

    fetchData();

    socket.emit('adminConnection');

    return () => {
      socket.off('clientMessage');
    };
  }, [token, dispatch]); // Add token and dispatch as dependencies

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('adminMessage', message);
      setMessage('');
    }
  };


  return (
    <div className="container mx-auto shadow-lg rounded-lg">
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <div className="font-bold text-2xl text-orange-500">Chat With Patients</div>
        <div className="w-full">
          <input
            type="text"
            placeholder="search IRL"
            className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between bg-white">
        <div className="w-full px-5 flex flex-col justify-between">
          {messages.map((msg, index) => (
            <div key={index} className="flex flex-row-reverse py-4 px-2 justify-center items-center border-b-2">
              <div className="w-full text-right">
                <div className="text-lg font-semibold">{msg.sender}</div>
                <span className="text-gray-500">{msg.text}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center border-t-2 border-gray-300 py-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
              value={message}
              onChange={handleMessageChange}
            />
            <button
              onClick={handleSendMessage}
              className="ml-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-blue-300 focus:outline-none focus:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          <div className="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminChat;
