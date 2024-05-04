import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';  // Ensure the CSS styles are imported

function App() {
  const [tasks, setTasks] = useState([]);  // Initial empty array for tasks
  // const [filter, setFilter] = useState('all');

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),  // Unique ID for each task
      title: title,
      completed: false
    };
    setTasks([...tasks, newTask]);  // Add new task to the existing tasks
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));  // Remove task by ID
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map(task => 
        task.id === taskId ? {...task, completed: !task.completed} : task
      )
    );  // Toggle the 'completed' status
  };

  // const filteredTasks = tasks.filter(task => {
  //   if (filter === 'completed') return task.completed;
  //   if (filter === 'incomplete') return !task.completed;
  //   return true;
  // });

  return (
    <div className="App">
      <h1>
        <span className="title-green">TO-DO LIST</span>
        <span className="title-black"> APPLICATION</span>
      </h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}



export default App;
