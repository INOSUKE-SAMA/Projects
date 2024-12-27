import React, { useState, useEffect } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks from the server
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:1000/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Add a new task
  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      const response = await fetch('http://localhost:1000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTask, time: 'Now', description: '', priority: 'Low' }),
      });
      const data = await response.json();
      setTasks([...tasks, data]); // Update state with the new task
      setNewTask(''); // Clear input field
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:1000/tasks/${id}`, { method: 'DELETE' });
      setTasks(tasks.filter((task) => task._id !== id)); // Remove task from state
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Mark a task as complete
  const completeTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:1000/tasks/${id}/complete`, {
        method: 'PUT',
      });
      const updatedTask = await response.json();
      setTasks(tasks.map((task) => (task._id === id ? updatedTask : task))); 
    } catch (error) {
      console.error('Error marking task as complete:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-4">
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white">Task Manager</h1>
        </header>

        {/* Add Task Section */}
        <div className="mb-6 flex">
          <input
            type="text"
            className="flex-1 p-2 rounded-lg border-2 border-gray-600 bg-gray-700 text-white"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        {/* Task List Section */}
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="bg-gray-700 rounded-lg p-4 flex justify-between items-center"
            >
              <div className={task.completed ? "line-through text-gray-400" : "text-white"}>
                {task.title}
              </div>
              <div className="flex space-x-2">
                <button
                  className="bg-green-500 hover:bg-green-400 text-white px-2 py-1 rounded-lg"
                  onClick={() => completeTask(task._id)}
                >
                  Complete
                </button>
                <button
                  className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded-lg"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
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
