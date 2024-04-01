// Import necessary dependencies
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axiosinstance from "../api/axios";
import { selectToken } from "../redux/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function AdminChat() {
  // State variables
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [adminEmail, setAdminEmail] = useState("");
  const [recieverEmail, setRecieverEmail] = useState("");
  const [filteredReceivers, setFilteredReceivers] = useState([]);
  const [socket, setSocket] = useState(null);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  // useEffect to set up socket connection and fetch data
  useEffect(() => {
    // Connect to socket server
    const socket = io("http://localhost:3000", { transports: ["websocket"] });
    setSocket(socket);

    // Fetch email and establish user connection
    const fetchData = async () => {
      try {
        const response = await axiosinstance.get("/getMail");
        const email = response.data.email;
        setAdminEmail(email);
      } catch (error) {
        console.error("Error fetching email:", error);
      }
    };
    fetchData();

    // Establish socket connection and event listeners
    socket.emit("userConnection", { token });

    // Handle received messages
    socket.on("recieverMessage", ({ message, sender, reciever }) => {
      console.log("Received message:", message, "from:", sender);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: message,
          sender: sender,
          reciever: reciever,
          sentByUser: false,
        },
      ]);
    });

    // Clean up event listeners
    return () => {
      socket.off("message");
    };
  }, [token, dispatch]);

  // Function to handle message input change
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  console.log(messages, " messa");

  // Function to send message via socket
  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      socket.emit("message", {
        message,
        sender: adminEmail,
        reciever: recieverEmail,
      });
      console.log("Sent message:", message);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: message,
          sender: adminEmail,
          reciever: recieverEmail,
          sentByUser: true,
        },
      ]);
      setMessage("");
      const messages = await axios.post("http://localhost:3000/postMessages", {
        message,
        sender: adminEmail,
        reciever: recieverEmail,
      });
    }
  };

  const Recievers = async (email) => {
    setRecieverEmail(email);
    try {
      const response = await axios.post("http://localhost:3000/getMessages", {
        sender: adminEmail,
        reciever: email,
      });
      const Allmessages = response.data;

      const filterdMessages = Allmessages.filter((message) => {
        return (
          (message.sender === adminEmail && message.reciever === email) ||
          (message.sender == email && message.reciever == adminEmail)
        );
      });
      setMessages(filterdMessages); // Merge new messages with old messages
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to fetch users
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axiosinstance.get("/getUsers");
        const filteredUsers = response.data.filterdUsers;
        console.log(filteredUsers);
        setFilteredReceivers(filteredUsers);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto flex flex-row shadow-lg rounded-lg h-screen">
      <div className="w-1/4 bg-gray-100 p-4 flex flex-col h-full">
        <div className="font-bold text-2xl text-orange-500 mb-4">
          Chat With Patients
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="search IRL"
            className="rounded-2xl bg-gray-200 py-3 px-4 w-full mb-4"
          />
        </div>
        <div className="flex flex-col flex-grow overflow-y-auto">
          {filteredReceivers.map((filterdUsers, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white border-b-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => Recievers(filterdUsers.email)}
            >
              <div className="flex items-center justify-center w-12 h-12 font-bold text-white bg-black rounded-full">
                {filterdUsers.username.charAt(0).toUpperCase()}
              </div>
              <div className="text-lg font-semibold">
                {filterdUsers.username}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4 bg-white p-4 flex flex-col h-full">
        <div className="px-5 py-5 flex flex-col flex-grow overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-full mt-2 space-x-3 ${
                msg.sender === adminEmail
                 ? "justify-end" : "justify-start"
              }`}
            >
              <p
                className={`p-3 rounded-lg  text-sm ${
                  msg.sentByUser
                    ? "bg-white-600 text-black  rounded-l-lg rounded-br-lg"
                    : " text-gray-800 rounded-r-lg rounded-bl-lg"
                }`}
              ></p>
              <div className="flex-shrink-0 w-12 h-12 font-bold text-white bg-black rounded-full flex items-center justify-center">
                {msg.sender.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col ml-4">
                <div className="text-lg font-semibold">{msg.sender}</div>
                <div className="bg-gray-200 rounded-lg p-3 text-gray-800">
                  {msg.message}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center border-t-2 border-gray-300 py-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="rounded-2xl bg-gray-100 py-3 px-4 w-full"
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
    </div>
  );
}

export default AdminChat;
