import { createBrowserRouter } from "react-router-dom";
import { Login } from "../views/Login";
import { Home } from "../views/Home";
import { Profile } from "../views/Profile";
import { UserRegister } from "../views/UserRegister";
import { ClientRegister } from "../views/ClientRegister";
import { ClientProfile } from "../views/ClientProfile";
import { ClientSearch } from "../views/ClientSearch";

export const getRouter = (token: string) => {
  if (!token) {
    return createBrowserRouter([
      {
        path: "*",
        id: "login",
        element: <Login />,
      },
    ]);
  } else {
    const router = [
      {
        path: "*",
        id: "home",
        element: <Home />,
      },
      {
        path: "/profile",
        id: "profile",
        element: <Profile />,
      },
      {
        path: "/user_register",
        id: "user_register",
        element: <UserRegister />,
      },
      {
        path: "/client_register",
        id: "client_register",
        element: <ClientRegister />,
      },
      {
        path: "/client_profile",
        id: "client_profile",
        element: <ClientProfile />,
      },
      {
        path: "client_search",
        id: "client_search",
        element: <ClientSearch />,
      },
    ];

    return createBrowserRouter(router);
  }
};
