import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers(users);
  }, []);

  async function fetchUsers(params: IUser[]) {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      console.log(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="App">
      <Card variant={CardVariant.outlined} width="200px" height="200px">
        <button>Кнопка</button>
        <div>asfasf</div>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
