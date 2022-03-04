import React from "react";

const NewTodo: React.FC = () => {
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-txt">Todo Text</label>
        <input type="text" id="todo-text" />
      </div>
      <button type="submit"></button>
    </form>
  );
};
export default NewTodo;
