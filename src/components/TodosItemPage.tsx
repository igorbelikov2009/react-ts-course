import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../types/types";

interface TodosItemPageProps {
  id: string;
}

const TodosItemPage: FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);

  const params = useParams<TodosItemPageProps>();
  console.log(params, params.id);

  useEffect(() => {
    fetchTodos(params);
  }, []);

  async function fetchTodos(params: TodosItemPageProps) {
    try {
      const response = await axios.get<ITodo>(
        "https://jsonplaceholder.typicode.com/todos/" + params.id
      );
      setTodo(response.data);
      // console.log(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <button>Back</button>
      <h1>
        Задача id:{todo?.id} "{todo?.title}"{" "}
        {todo?.completed ? "выполнена" : "не выполнена"}
      </h1>
    </div>
  );
};

export default TodosItemPage;
