// Context:
import { TodosContext } from "../store/todosContext";
// Hook:
import { useContext, useRef } from "react";
// Styles:
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const context = useContext(TodosContext);

  const todoInputRef = useRef<HTMLInputElement>(null);

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    context.addTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={formSubmissionHandler}>
      <label htmlFor="text">Task</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add task</button>
    </form>
  );
};

export default NewTodo;