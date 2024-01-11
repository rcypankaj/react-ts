import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error;
      return;
    }
    addTodo(enteredText);
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id={classes.text} ref={todoTextInputRef} />
      <button id={classes.todoButton}>Add todo</button>
    </form>
  );
};

export default NewTodo;
