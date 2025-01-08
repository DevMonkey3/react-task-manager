import React from 'react';
import './App.css';

function TaskList({ tasks, onCompleteTask, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : ''}`}
        >
          <div>
            <h5 className='txt-title-card'>{task.task}</h5>
            <p className='txt-des-card'>{task.description}</p>
          </div>
          <div className="task-buttons">
            <button
              className="btn btn-complete"
              onClick={() => onCompleteTask(task.id)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              className="btn btn-delete"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;