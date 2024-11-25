import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import api from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showPending, setShowPending] = useState(false);

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      api.post('/tasks', { title: newTask }).then((response) => {
        setTasks([...tasks, response.data]);
        setNewTask('');
      });
    }
  };

  const deleteTask = (id) => {
    api.delete(`/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  const toggleTask = (id, completed) => {
    api.put(`/tasks/${id}`, { completed: !completed }).then((response) => {
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    });
  };

  const editTask = (id, title) => {
    api.put(`/tasks/${id}`, { title }).then((response) => {
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    });
  };

  const filteredTasks = showPending
    ? tasks.filter((task) => !task.completed)
    : tasks;

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Adicionar tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      <div className="filter-container">
        <button onClick={() => setShowPending(!showPending)}>
          {showPending ? 'Mostrar Todas' : 'Mostrar Pendentes'}
        </button>
      </div>
      <TodoList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
