import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
]);

const AppRouter = () => {
   return <RouterProvider router={router} />;
};

export default AppRouter;
