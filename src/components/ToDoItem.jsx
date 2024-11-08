import React, { useState } from 'react';

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={() => setIsEditing(false)} className="cancel-button">Cancel</button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(task.id)}
            className={`task-text ${task.completed ? 'completed-task' : ''}`}
          >
            {task.text}
          </span>
          <button onClick={() => toggleComplete(task.id)} className="complete-button">
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
          <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;


