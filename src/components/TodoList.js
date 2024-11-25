import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onToggle={() => onToggle(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
