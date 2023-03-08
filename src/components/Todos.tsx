// Component:
import TodoItem from "./TodoItem";
// Context:
import { TodosContext } from "../store/todosContext";
// Hook:
import { useContext } from "react";
// Styles:
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const context = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {context.todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteItem={context.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
