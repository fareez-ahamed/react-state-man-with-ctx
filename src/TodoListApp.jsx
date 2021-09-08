import React, { useState, useContext } from "react";
import { Button, ListGroup, InputGroup, FormControl } from "react-bootstrap";
import { TodoContext } from "./App";

const TodoListApp = () => {
  return (
    <div class="m-2">
      <TodoListForm />
      <TodoListDisplay />
    </div>
  );
};

const TodoListForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);
  return (
    <InputGroup className="mb-3">
      <FormControl
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={() => addTodo(todo)}
      >
        Add
      </Button>
    </InputGroup>
  );
};

export const TodoListDisplay = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ListGroup>
      {todos.map((x) => (
        <ListGroup.Item>{x}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoListApp;
