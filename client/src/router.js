import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import All from "./components/Home/categories/All";
import Drinks from "./components/Home/categories/Drinks";
import Pizza from "./components/Home/categories/Pizza";
import Burgers from "./components/Home/categories/Burgers";
import Sweets from "./components/Home/categories/Sweets";
import Admin from "./components/Admin/Admin";
import Products from "./components/Admin/Products";
import Orders from "./components/Admin/Orders";
import Users from "./components/Admin/Users";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Profile from "./components/Profile/Profile";
import Basket from "./components/Profile/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <All />,
      },
      {
        path: "/drinks",
        element: <Drinks />,
      },
      {
        path: "/pizza",
        element: <Pizza />,
      },
      {
        path: "/burgers",
        element: <Burgers />,
      },
      {
        path: "/sweets",
        element: <Sweets />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin",
        element: <Products />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);

export default router;
