import React, { useState } from "react";
import Header from "../Components/Header";
import axios from "axios";

const TimeManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    time: "",
    priority: "low",
  });
  const formData = {
    newTask
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({ title: "", time: "", priority: "low" });
    const response = await axios.post('http://localhost:5000/TimeManagement', formData);

  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500">
            Time <span className="text-black">Management</span>
          </h1>
          <p className="text-lg text-gray-600">
            Organize your day efficiently with this time management tool.
          </p>
        </header>
        <div>
          {/* Time Management Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white rounded-md shadow-md p-6  mt-36"
          >
            {/* Task Input */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Task:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your task"
                required
              />
            </div>

            {/* Time Input */}
            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Time:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={newTask.time}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            {/* Priority Select */}
            <div className="mb-4">
              <label
                htmlFor="priority"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Priority:
              </label>
              <select
                id="priority"
                name="priority"
                value={newTask.priority}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-blue-500 transition-all duration-300 ease-in-out"
            >
              Add Task
            </button>
          </form>

          {/* Task List
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="bg-gray-100 p-4 my-2 rounded-md">
              <strong>{task.title}</strong>
              <p className="text-gray-600">Time: {task.time} | Priority: {task.priority}</p>
            </li>
          ))}
        </ul>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default TimeManagement;
