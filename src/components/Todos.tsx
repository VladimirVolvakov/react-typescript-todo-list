// Component:
import TodoItem from "./TodoItem";
// Model:
import Todo from "../models/todo";
// Styles:
import styles from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return <ul className={styles.todos}>
    {props.items.map(item => <TodoItem key={item.id} text={item.text} />)}
  </ul>
}

export default Todos;