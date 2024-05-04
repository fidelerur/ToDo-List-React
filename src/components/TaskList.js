import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      <div className="task-list-header">
        <div style={{ width: '60%' }}>Task</div>
        <div style={{ width: '10%'}}>Status</div>
        <div style={{ width: '27%', textAlign: 'right' }}>Clear</div>
      </div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
