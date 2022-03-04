import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todoAddHandler = (text: string) => {
    console.log(text);
  };
  const todos = [{ id: "t1", text: "walk 10 kms" }];
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
