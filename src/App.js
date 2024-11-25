import React, { useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [editando, setEditando] = useState(null);
  const [tarefaEditada, setTarefaEditada] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  const excluirTarefa = (indice) => {
    setTarefas(tarefas.filter((_, i) => i !== indice));
  };

  const iniciarEdicao = (indice) => {
    setEditando(indice);
    setTarefaEditada(tarefas[indice]);
  };

  const salvarEdicao = (indice) => {
    const tarefasAtualizadas = tarefas.map((tarefa, i) =>
      i === indice ? tarefaEditada : tarefa
    );
    setTarefas(tarefasAtualizadas);
    setEditando(null);
  };

  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Adicionar tarefa..."
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul className="lista-tarefas">
        {tarefas.map((tarefa, indice) => (
          <li key={indice} className="item-tarefa">
            {editando === indice ? (
              <>
                <input
                  type="text"
                  value={tarefaEditada}
                  onChange={(e) => setTarefaEditada(e.target.value)}
                />
                <button onClick={() => salvarEdicao(indice)}>Salvar</button>
              </>
            ) : (
              <>
                <span>{tarefa}</span>
                <button onClick={() => excluirTarefa(indice)}>Excluir</button>
                <button onClick={() => iniciarEdicao(indice)}>Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
