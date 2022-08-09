import { BrowserRouter, NavLink, Route } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodosItemPage from "./components/TodosItemPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </div>

        <Route path={"/users"} exact>
          <UsersPage />
        </Route>

        <Route path={"/todos"} exact>
          <TodosPage />
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
