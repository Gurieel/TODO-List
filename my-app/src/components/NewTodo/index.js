// Utilizar a extenção do VS chamada:
// ES7 React/Redux/GraphQL/React-Native snippet
// Para criar um template de componente React
// Utilize: rfce e aperte enter
// Agora ajuste do seu jeito
import React, { useState } from "react";

// PropTypes são obrigatórios em componentes que recebem propriedades
// Como o onNewTodo abaixo, é preciso instalar o proptypes utilizando: npm i prop-types --save
// Importe o proptypes
import PropTypes from "prop-types";

import "./styles.css";

const NewTodo = ({ onNewTodo }) => {
  // Código 13 é o enter na tabela ASCII
  // Código 27 é o esc na tabela ASCII
  const ESC_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState("");

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const erase = () => {
    setValue("");
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESC_KEY) {
      erase();
    }
  };

  return (
    <>
      <input
        type="text"
        className="new-todo"
        placeholder="O que precisa ser feito?"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

// Deve-se declarar todos as propriedades recebidas e os tipos delas
NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
