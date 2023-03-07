// Component:
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
// Hook:
import { useState } from 'react';
// Model:
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    setTodos(prevTodos => {
      return [...prevTodos, new Todo(enteredText)]
    });
  }

  const deleteTodoHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== id);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
