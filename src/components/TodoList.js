import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task._id}
          task={task}
          onDelete={() => onDelete(task._id)}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
