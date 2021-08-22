import { useState, useRef, useEffect } from "react";
import React from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
export default function App() {
  const [todos, setTodo] = useState([]);
  let todoValRef = useRef();
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem("todos"));
    if (storedTodo) setTodo(storedTodo);
  }, []);
  function addTodo() {
    const todo = todoValRef.current.value;
    if (todo === "") return;
    setTodo((prevData) => {
      return [
        ...prevData,
        {
          id: uuidv4(),
          name: todo,
          complete: false
        }
      ];
    });
    todoValRef.current.value = null;
  }
  function ToggleTodo(id) {
    const newTodo = [...todos];
    const find = newTodo.find((todo) => todo.id === id);
    find.complete = !find.complete;
    setTodo(newTodo);
  }
  function clearTodo() {
    const remainTodo = todos.filter((todo) => !todo.complete);
    setTodo(remainTodo);
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        class="input"
        ref={todoValRef}
        type="text"
        placeholder="Enter Todo"
      />
      <br />
      <button class="button p-2 btn-success" onClick={addTodo}>
        Add Todo
      </button>
      <br />
      <button class="button p-2 btn-danger" onClick={clearTodo}>
        Clear complete
      </button>
      <br />
      <h1 class="mt-4">TodoList</h1>
      <TodoList class="mb-4" todos={todos} ToggleTodo={ToggleTodo} />
      Todos to be done! {todos.filter((todo) => !todo.complete).length}
    </div>
  );
}
