import React, { useState } from 'react';

const TodoItem = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.title);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(task._id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <span style={{ flex: 1 }}>{task.title}</span>
          <button
            className="complete"
            onClick={() => onToggle(task._id, task.completed)}
          >
            {task.completed ? 'Desmarcar' : 'Concluir'}
          </button>
          <button className="edit" onClick={() => setIsEditing(true)}>
            Editar
          </button>
          <button className="delete" onClick={onDelete}>
            Excluir
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
