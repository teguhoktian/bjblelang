import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const router = createBrowserRouter(AppRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
