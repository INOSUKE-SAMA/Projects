import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Listening to Input Tasks
  const handleInput = (e) => {
    setTask(e.target.value);
  };

  // Adding Tasks to List
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  // Removing Task from List
  const handleRemove = (index) => () => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };

  return (
    <>
      {/* Input Section */}
      <div className="input h-[50vh] w-full flex items-center justify-center bg-primary">
        <div
          className="task bg-secondary w-[600px] flex justify-between rounded-3xl p-4"
          
        >
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            className="bg-transparent outline-none text-white w-[calc(100%-60px)] text-2xl p-2"
            
            onChange={handleInput}
          />
          <button
            className="bg-btn p-2 text-2xl text-white w-[60px] h-[60px] rounded-full"
            
            onClick={addTask}
          >
            +
          </button>
        </div>
      </div>

      {/* Display Section */}
      <div className="display h-[50vh] w-full flex flex-col items-center justify-start rounded-3xl p-4">
        <ul className="space-y-4 w-[300px]">
          
          {taskList.map((element, index) => (
            <li
              key={index}
              className="bg-secondary text-white p-4 rounded-xl flex justify-between items-center"
              
            >
              <span>{element}</span>
              <button
                onClick={handleRemove(index)}
                className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600"
               
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
