import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  };
  const textInputRef = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-txt">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add ToDo</button>
    </form>
  );
};
export default NewTodo;
