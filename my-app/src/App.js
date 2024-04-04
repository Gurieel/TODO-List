import React, { useState } from "react";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
const App = () => {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    // ... é para pegar os valores já existentes no todos
    // E acrescentar um novo todo

    // new Date().getTime() é para pegar em string o tempo atual
    // Como o tempo não volta, o id sempre será diferente
    // Mas não é utilizavel em sistemas maiores
    setTodos([
      ...todos,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
  };

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const onRemove = (todo) => {
    // Vai filtrar tudo que tem o id diferente do id clicado
    // Deixando todos que não foram clicados na lista
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
};

export default App;
