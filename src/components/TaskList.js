import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask }) {
    return (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#eee', fontWeight: 'bold' }}>
            <div>Task</div>
            <div>Status</div>
            <div>Clear</div>
          </div>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </>
    );
}

export default TaskList;
