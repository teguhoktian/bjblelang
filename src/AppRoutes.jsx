import Home from "./page/Home";
import Login from "./page/Login";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default AppRoutes;
