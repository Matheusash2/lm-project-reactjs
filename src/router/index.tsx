import { createBrowserRouter } from "react-router-dom";
import { Login } from "../views/Login";
import { Home } from "../views/Home";

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
    ];

    return createBrowserRouter(router);
  }
};
