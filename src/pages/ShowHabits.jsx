import React, { useState } from "react";
import Header from "../Components/Header";

function ShowHabits() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [taskTimes, setTaskTimes] = useState(
    Array.from({ length: 10 }, () => "")
  );
  const [taskDone, setTaskDone] = useState(
    Array.from({ length: 10 }, () => false)
  );
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const taskWithTime = {
        task: newTask,
        time: showTimeInput ? taskTimes[tasks.length] : null,
        done: false,
      };

      setTasks([...tasks, taskWithTime]);
      setNewTask("");
      setShowTimeInput(false);
      setTaskDone([...taskDone, false]);
    }
  };

  const removeTask = (event, index) => {
    event.stopPropagation();
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

    const updatedTaskDone = [...taskDone];
    updatedTaskDone.splice(index, 1);
    setTaskDone(updatedTaskDone);

    setSelectedTaskIndex(null);
  };

  const toggleTimeInput = () => {
    setShowTimeInput(!showTimeInput);
  };

  const handleTimeChange = (index, time) => {
    const updatedTimes = [...taskTimes];
    updatedTimes[index] = time;
    setTaskTimes(updatedTimes);
  };

  const toggleTaskDone = (index) => {
    const updatedTaskDone = [...taskDone];
    updatedTaskDone[index] = !updatedTaskDone[index];
    setTaskDone(updatedTaskDone);
  };

  const showTaskDetails = (index) => {
    setSelectedTaskIndex(index);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4">To-Do App</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="py-2 px-4 border border-gray-300 rounded mr-2"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-orange-500 text-white py-2 px-4 rounded"
            onClick={addTask}
          >
            Add Task
          </button>
          <button
            className="ml-2 bg-black text-white py-2 px-4 rounded"
            onClick={toggleTimeInput}
          >
            {showTimeInput ? "Hide Time" : "Set Time"}
          </button>
        </div>
        {showTimeInput && (
          <div className="mb-4">
            {tasks.map((_, index) => (
              <input
                key={index}
                type="time"
                className="py-2 px-4 border border-gray-300 rounded mr-2"
                onChange={(e) => handleTimeChange(index, e.target.value)}
              />
            ))}
          </div>
        )}
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between bg-gray-100 p-2 mb-2 rounded ${
                taskDone[index] && "line-through text-gray-500"
              }`}
              onClick={() => showTaskDetails(index)} // Added onClick for task details
              style={{ cursor: "pointer" }}
            >
              <div>
                <span>{task.task}</span>
                {task.time && <span className="ml-2">Time: {task.time}</span>}
              </div>
              <div className="flex">
                <button
                  className="mr-2 bg-green-500 text-white py-1 px-2 rounded"
                  onClick={() => toggleTaskDone(index)}
                >
                  {taskDone[index] ? "Undo" : "Mark as Done"}
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded"
                  onClick={(e) => removeTask( e, index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        {selectedTaskIndex !== null && (
          <div className="mt-4">
            <p className="text-red-500 text-lg">
              Task: {tasks[selectedTaskIndex].task}
            </p>
            <p className="text-red-500 text-lg">
              Done: {taskDone[selectedTaskIndex] ? "Yes" : "No"}
            </p>
            {tasks[selectedTaskIndex].time && (
              <p className="text-red-500 text-lg">
                Time: {tasks[selectedTaskIndex].time}
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ShowHabits;
