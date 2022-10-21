import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  // в дженерике <ITodo[]> указываем что, ITodo является массивом []

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      // в ответе мы ожидаем массив пользователей: <ITodo[]>
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <h3>Страница Todo</h3>

      <List
        items={todos}
        renderItem={(todo: ITodo) => (
          <TodoItem todo={todo} key={todo.id}></TodoItem>
        )}
      ></List>
    </>
  );
};

export default TodosPage;
