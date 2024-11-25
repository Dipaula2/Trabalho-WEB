import React from "react";

const TodoItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={onToggle}>{task.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
