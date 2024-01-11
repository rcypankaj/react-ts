import { useContext } from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const { items, removeTodo } = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {items.map((item: Todo) => (
        <TodoList
          text={item.text}
          id={item.id}
          key={item.id}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
