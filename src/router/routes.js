import { createBrowserRouter } from "react-router-dom";
import Default from "../components/Default/Default";
import Grandpa from "../components/Grandpa/Grandpa";
import Home from "../components/Home/Home";
import Orders from "../components/Orders/Orders";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => fetch('tshirts.json'),
                element: <Home></Home>,
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },
            {
                path: '/grandpa',
                element: <Grandpa></Grandpa>
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },


        ]
    },
    {
        path: '*',
        element: <Default></Default>
    }
]);