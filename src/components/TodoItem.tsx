// Styles:
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onDeleteItem: () => void }> = (props) => {
  return <li className={styles.item} onClick={props.onDeleteItem}>{props.text}</li>;
}

export default TodoItem;