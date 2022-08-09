import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { IUser } from "../types/types";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const history = useHistory();

  useEffect(() => {
    fetchUser(params);
  }, []);

  async function fetchUser(params: UserItemPageParams) {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
      // console.log(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <button onClick={() => history.push("/users")}>Back</button>
      <h1>Страница пользователя {user?.name} </h1>

      <div>{user?.email}</div>

      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
