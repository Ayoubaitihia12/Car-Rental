import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/admin/Dashboard";
import Users from "../pages/admin/Users";
import Rents from "../pages/admin/rents/Rents";
import Cars from "../pages/admin/cars/Cars";
import Navbar from "../layout/public/Navbar";
import Home from "../pages/public/Home";

export const ADMIN_USERS = '/admin/users';
export const ADMIN_CARS = '/admin/cars';
export const ADMIN_RENTS = '/admin/rents';

export const router = createBrowserRouter([
    {
        element: <Dashboard/>,
        children: [
            {
                path:  ADMIN_USERS,
                element: <Users />,
            },
            {
                path:  ADMIN_CARS,
                element: <Cars />,
            },
            {
                path:  ADMIN_RENTS,
                element: <Rents />,
            }
        ]
    },
    {
        element: <Navbar />,
        children: [
            {
                path:  "/",
                element: <Home/>
            },
        ]
    }
])