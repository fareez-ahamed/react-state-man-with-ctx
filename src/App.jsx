import React, { useCallback, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoListApp from "./TodoListApp";
import "bootstrap/dist/css/bootstrap.min.css";

export const TodoContext = React.createContext({});

function App() {
  return (
    <TodoCtxProvider>
      <TodoListApp />
    </TodoCtxProvider>
  );
}

export const TodoCtxProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(
    (todo) => setTodos((s) => [todo, ...s]),
    [todos, setTodos]
  );

  const valObj = useMemo(() => {
    return { todos, addTodo };
  }, [todos, addTodo]);

  return (
    <TodoContext.Provider value={valObj}>{props.children}</TodoContext.Provider>
  );
};

export default App;
