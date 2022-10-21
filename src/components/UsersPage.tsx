import axios from "axios";
import React, { FC, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  // в дженерике <IUser[]> указываем что, IUser является массивом []

  //   const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  //   async function fetchUsers(params: IUser[]) {
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      // console.log(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <h3>Страница пользователей</h3>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem user={user} key={user.id}></UserItem>
        )}
      ></List>
    </>
  );
};

export default UsersPage;

/* функция renderItem принимает одного пользователя user типа: IUser и возвращает компонент UserItem.
     Сразу в компонент UserItem прокидываем пропс user={user}, и указывем ключ key={user.id}
     */

//   return (
//     <List
//       items={users}
//       renderItem={(user: IUser) => (
//         <UserItem
//           // onClick={(user) => history.push("/users/" + user.id)}
//           user={user}
//           key={user.id}
//         />
//       )}
//     />
//   );
// };
