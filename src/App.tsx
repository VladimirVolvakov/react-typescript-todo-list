// Component:
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
// Context Provider:
import TodosContextProvider from './store/todosContext';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;