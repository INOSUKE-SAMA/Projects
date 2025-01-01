import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCheck, FaTimes, FaPlus } from 'react-icons/fa'; //install react-icons for icons

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    time: '',
    description: '',
    priority: ''
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:1000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value
    });
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) return; //trim removes the space infront of the string
    try {
      const response = await axios.post('http://localhost:1000/tasks', newTask);
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', time: '', description: '', priority: '' });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:1000/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const completeTask = async (id) => {
    try {
      const response = await axios.put(`http://localhost:1000/tasks/${id}/complete`);
      const updatedTask = response.data;
      setTasks(tasks.map((task) => (task._id === id ? updatedTask : task))); 
    } catch (error) {
      console.error('Error marking task as complete:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 space-y-6">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
        </header>

        {/* Add Task Section */}
        <form onSubmit={addTask} className="flex flex-wrap gap-4 justify-between items-center">
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="time"
            value={newTask.time}
            onChange={handleInputChange}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Time"
            required
          />
          <input
            type="text"
            name="priority"
            value={newTask.priority}
            onChange={handleInputChange}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Priority"
            required
          />
          <input
            type="text"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
            required
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center">
            <FaPlus />
          </button>
        </form>

        {/* Task List Section */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="bg-gray-100 rounded-lg p-4 flex flex-col space-y-2 shadow-sm"
            >
              <div className={task.completed ? "line-through text-gray-500" : "text-gray-900"}>
                <h3 className="text-xl font-bold">{task.title}</h3>
                <p className="text-gray-600">{task.time}</p>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-gray-600">{task.priority}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-lg flex items-center justify-center"
                  onClick={() => completeTask(task._id)}
                >
                  <FaCheck />
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg flex items-center justify-center"
                  onClick={() => deleteTask(task._id)}
                >
                  <FaTimes />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
