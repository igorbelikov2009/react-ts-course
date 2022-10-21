import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";
import EventsExample from "./components/EventsExample";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import TodosItemPage from "./components/TodosItemPage";
import UserItemPage from "./components/UserItemPage";

function App() {
  const users2: IUser[] = [
    {
      id: 1,
      name: "UlbiTV ",
      email: " asf@mail.ru",
      address: { city: "Moskow", street: "Lenina", zipcode: "123" },
    },
    {
      id: 2,
      name: "Timur ",
      email: " asf@mail.ru",
      address: { city: "Kaliningrad", street: "Pushkina", zipcode: "123" },
    },
  ];

  return (
    <BrowserRouter>
      <div>
        <div style={{ margin: 48 }}>
          <NavLink
            style={{ fontSize: 24, marginLeft: 12, marginRight: 12 }}
            to="/userlist"
          >
            userlist
          </NavLink>
          <NavLink
            style={{ fontSize: 24, marginLeft: 12, marginRight: 12 }}
            to="/users"
          >
            Страница пользователей
          </NavLink>
          <NavLink
            style={{ fontSize: 24, marginLeft: 12, marginRight: 12 }}
            to="/todos"
          >
            Страница Todo
          </NavLink>
          <NavLink
            style={{ fontSize: 24, marginLeft: 12, marginRight: 12 }}
            to="/card"
          >
            card
          </NavLink>
          <NavLink
            style={{ fontSize: 24, marginLeft: 12, marginRight: 12 }}
            to="/eventsExample"
          >
            Примеры событий
          </NavLink>
        </div>

        <Route path={"/userlist"} exact>
          <UserList users={users2}></UserList>
        </Route>

        <Route path={"/users"} exact>
          <UsersPage />
        </Route>

        <Route path={"/todos"} exact>
          <TodosPage />
        </Route>

        <Route path={"/card"} exact>
          <Card
            onClick={(num: number) => console.log("click", num)}
            variant={CardVariant.outlined}
            width="200px"
            height="200px"
          >
            <button>Кнопка</button>
            <div>block with text</div>
          </Card>
        </Route>

        <Route path={"/eventsExample"} exact>
          <EventsExample />
        </Route>

        <Route path={"/users/:id"}>
          <UserItemPage />
        </Route>

        <Route path={"/todos/:id"} exact>
          <TodosItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
