// Component:
import TodoItem from "./TodoItem";
// Model:
import Todo from "../models/todo";
// Styles:
import styles from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = (props) => {
  return <ul className={styles.todos}>
    {props.items.map(item => <TodoItem key={item.id} text={item.text} onDeleteItem={props.onDeleteTodo.bind(null, item.id)} />)}
  </ul>
}

export default Todos;