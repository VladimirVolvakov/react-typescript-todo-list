// Hook:
import React, { createContext, useState } from "react";
// Model:
import Todo from "../models/todo";

type TodosContextObj = {
  todos: Todo[];
  addTodo: (enteredText: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  todos: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);

    setTodos(prevTodos => {
      return [...prevTodos, newTodo];
    });
  }

  const deleteTodoHandler = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== id);
    });
  };

  const contextValue: TodosContextObj = { 
    todos: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler 
  };

  return (
    <TodosContext.Provider value={contextValue}>
      { children }
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;