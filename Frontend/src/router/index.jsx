import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard";
import Users from "../pages/admin/Users";
import Rents from "../pages/admin/Rents";
import Cars from "../pages/admin/Cars";

export const router = createBrowserRouter([
    {
        element: <Dashboard/>,
        children: [
            {
                path:  '/admin/users',
                element: <Users />,
            },
            {
                path:  '/admin/cars',
                element: <Cars />,
            },
            {
                path:  '/admin/rents',
                element: <Rents />,
            }
        ]
    }
])