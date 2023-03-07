// Hook:
import { useRef } from "react";

const NewTodo = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current?.value;

    if (enteredText!.trim().length === 0) {
      throw new Error('Please enter a task');
    }
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <label htmlFor="text">Task</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add task</button>
    </form>
  );
};

export default NewTodo;