// Component:
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
// Model:
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Feed Mr. Cat'),
    new Todo('Wash dishes')
  ];

  return (
    <div>
      <Todos items={todos} />
      <NewTodo />
    </div>
  );
}

export default App;
