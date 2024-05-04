import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';  

function App() {
  const [tasks, setTasks] = useState([]);  
  const [filter, setFilter] = useState('all');


  useEffect(() => {
    const loadTasks = () => {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    };
    loadTasks();
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };

    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];

      return updatedTasks;
    });
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);

      return updatedTasks;
    });
  };

  const toggleComplete = (taskId) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => 
        task.id === taskId ? {...task, completed: !task.completed} : task
      );
      return updatedTasks;
    });
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>
        <span className="title-green">TO-DO LIST</span>
        <span className="title-black"> APPLICATION</span>
      </h1>
      <div style={{justifyContent: 'space-between', alignItems: 'center' }}>
        <TaskForm addTask={addTask} />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ marginLeft: '20px' }}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
