import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axiosinstance from "../api/axios";
import { selectToken } from "../redux/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function ClientChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [clientEmail, setClientEmail] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosinstance.get("/getMail");
        const email = response.data.email;
        setClientEmail(email);

        const admin = await axiosinstance.get("/getAdmin");
        const adminEmail = admin.data.adminEmail;
        setAdminEmail(adminEmail);
        // fetching messages
        const responseMessage = await axios.post(
          "http://localhost:3000/getMessages",
          {
            sender: email,
            reciever: adminEmail,
          }
        );
        const Allmessages = responseMessage.data;
        console.log(email, " clint");
        console.log(Allmessages, "mess");
        setMessages(Allmessages);
      } catch (error) {
        console.error("Error fetching email:", error);
      }
    };

    const newSocket = io("http://localhost:3000", {
      transports: ["websocket"],
    });
    fetchData();

    newSocket.on("connect", () => {
      console.log("Connected to server");
      newSocket.emit("userConnection", { token });
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [dispatch, token]);

  useEffect(() => {
    if (!socket) return;
    socket.on("recieverMessage", ({ message, sender, reciever }) => {
      console.log("Received message:", message, "from:", sender);
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: message, sender, reciever, sentByUser: false },
      ]);
    });
  }, [socket]);
  console.log(adminEmail, " : adminEmail");

  const handleMessageSend = async () => {
    if (message.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: message,
          sender: clientEmail,
          reciever: adminEmail,
          sentByUser: true,
        },
      ]);
      console.log(message, " messa");
      setMessage("");
      socket.emit("message", {
        sender: clientEmail,
        reciever: adminEmail,
        message,
      });
      const messages = await axios.post("http://localhost:3000/postMessages", {
        message,
        sender: clientEmail,
        reciever: adminEmail,
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex w-full mt-2 space-x-3 ${
                  msg.sender == clientEmail ? "justify-end" : "justify-start"
                }`}
              >
                <p
                  className={`p-3 rounded-lg text-sm ${
                    msg.reciever == adminEmail
                      ? "bg-white-600 text-black shadow-md rounded-l-lg rounded-br-lg justify-start : justify-end"
                      : "bg-gray-300 text-gray-800 rounded-r-lg rounded-bl-lg"
                  }`}
                >
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gray-300 p-4 flex items-center">
            <input
              className="flex-grow h-10 rounded px-3 text-sm mr-2"
              type="text"
              placeholder="Type your message…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-500"
              onClick={handleMessageSend}
            >
              Send
            </button>
            <button className="bg-green-500 text-white rounded-md text-sm hover:bg-blue-500 px-3 py-2 flex">
              PAY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientChat;
