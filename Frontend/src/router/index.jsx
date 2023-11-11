import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard";
import Users from "../pages/admin/Users";
import Rents from "../pages/admin/Rents";
import Cars from "../pages/admin/Cars";

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
    }
])