import "./styles.css";
import Todo from "./Todo";

export default function TodoList({ todos, ToggleTodo }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} ToggleTodo={ToggleTodo} todo={todo} />;
  });
}
