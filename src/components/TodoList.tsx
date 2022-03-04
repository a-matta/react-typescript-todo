import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
}
const TodoList: React.FC<TodoListProps> = (props) => {
  const todos = [{ id: "t1", text: "Walk 10 kms" }];
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
