import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ fontSize: 24, padding: 6 }}>
      <input type="checkbox" checked={todo.completed} />
      {todo.id} {todo.title}
    </div>
  );
};

export default TodoItem;
