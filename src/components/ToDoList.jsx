import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, addTask, deleteTask, toggleComplete, editTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="new-task-input"
      />
      <button onClick={handleAddTask} className="add-button">Add</button>
      <div className="tasks">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;


