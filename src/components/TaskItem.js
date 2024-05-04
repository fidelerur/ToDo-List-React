import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span>{task.title}</span>
      </div>
      <div style={{
          color: task.completed ? '#00B04F' : 'initial',
        }}>
        {task.completed ? 'Complete' : 'Pending'}
      </div>
      <div className="clear">
        <button onClick={() => deleteTask(task.id)}>
          <FontAwesomeIcon icon={faTrash} style= {{ color: 'black' }} />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
