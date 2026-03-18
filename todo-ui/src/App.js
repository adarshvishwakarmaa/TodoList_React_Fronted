import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const API = "http://localhost:44325/Todo/";

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = () => {
    axios.get(API + "GetTodos").then(res => setTodos(res.data));
  };

  const addTodo = () => {
    axios.post(API + "AddTodo", { Title: title }).then(() => {
      setTitle("");
      loadTodos();
    });
  };

  const deleteTodo = (id) => {
    axios.post(API + "DeleteTodo?id=" + id).then(loadTodos);
  };

  const toggleTodo = (id) => {
    axios.post(API + "ToggleTodo?id=" + id).then(loadTodos);
  };

  return (
  <div className="app-bg">
    <div className="todo-card">
      <h2 className="title">✨ Todo App</h2>

      <div className="input-group custom-input">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.Id} className="todo-item">
            <span
              className={t.IsCompleted ? "completed" : ""}
              onClick={() => toggleTodo(t.Id)}
            >
              {t.Title}
            </span>

            <button onClick={() => deleteTodo(t.Id)}>✖</button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}

export default App;