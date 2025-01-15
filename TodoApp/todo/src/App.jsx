import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Function to format date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString(); // This gives you a readable date-time string like "MM/DD/YYYY, HH:MM:SS AM/PM"
  };

  const addTask = () => {
    if (taskInput.trim() === '') return;
    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
      dateTime: getCurrentDateTime(), // Add current date and time here
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.title} (Added on: {task.dateTime})
            </span>
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
