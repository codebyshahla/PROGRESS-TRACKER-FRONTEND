import React, { useState } from 'react';

function ClientChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageSend = () => {
    setMessages([...messages, { text: message, sentByUser: true }]);
    setMessage('');
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex w-full mt-2 space-x-3 ${msg.sentByUser ? 'justify-end' : 'justify-start'}`}>
                <p className={`p-3 rounded-lg text-sm ${msg.sentByUser ? 'bg-white-600 text-black shadow-md rounded-l-lg rounded-br-lg' : 'bg-gray-300 text-gray-800 rounded-r-lg rounded-bl-lg'}`}>
                  {msg.text}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientChat;
