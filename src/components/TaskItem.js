import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TaskItem({ task, toggleComplete, deleteTask }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#fff' }}>
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              style={{ marginRight: '10px' }}
            />
            {task.title}
          </div>
          <div>
            {task.completed ? 'Complete' : 'Pending'}
          </div>
          <button onClick={() => deleteTask(task.id)} style={{ background: 'none', border: 'none' }}>
            <FontAwesomeIcon icon={faTrash} style={{ color: 'black'}} />
          </button>
        </div>
      );
}

export default TaskItem;
