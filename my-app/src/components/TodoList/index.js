import React from "react";
// PropTypes são obrigatórios em componentes que recebem propriedades
// Como o onNewTodo abaixo, é preciso instalar o proptypes utilizando: npm i prop-types --save
// Importe o proptypes
import PropTypes from "prop-types";

import { MdDelete } from "react-icons/md";

import "./styles.css";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="todo-list">
      {/* Abrir um {} para iniciar um map, onde se pega todos os dados da lista
          todos e cria um novo item html para cada item da lista */}

      {todos.map((todo) => {
        return (
          <>
            <li key={todo.id.toString()}>
              <span
                className={["todo", todo.checked ? "checked" : ""].join(" ")}
                onClick={() => onToggle(todo)}
                role="button"
              >
                {todo.title}
              </span>
              {/* Biblioteca de icones uteis para o código
                npm i react-icons --save
                após instalar importe no arquivo que irá utilizar */}
              <button
                type="button"
                className="remove"
                onClick={() => onRemove && onRemove(todo)}
              >
                <MdDelete size={28} />
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  // todos é um array, onde cada item recebe um objeto
  // PropTypes.arrayOf = array
  // PropTypes.shape = objeto
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
