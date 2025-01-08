// App.js
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task Function
  function addTask(task) {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), ...task }]);
  }

  // Complete Task Function
  function completionTask(taskID) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskID ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Remove Task Function
  function removeTask(taskID) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskID));
  }

  return (
    <div className="app-container">
      <div className="task-manager-container">
        <header className="header">
          <h1>Task Manager</h1>
        </header>
        <main className="main">
          <TaskInput onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            onCompleteTask={completionTask}
            onDeleteTask={removeTask}
          />
        </main>
        <footer className="footer">
          <p>© 2025 Task Manager</p>
        </footer>
      </div>
    </div>
  );
}

export default App;