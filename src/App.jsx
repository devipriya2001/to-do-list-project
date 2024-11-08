import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './components/todolist.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learning React', completed: true },
    { id: 2, text: 'Complete the React Project', completed: false },
  ]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <ToDoList
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
}

export default App;

