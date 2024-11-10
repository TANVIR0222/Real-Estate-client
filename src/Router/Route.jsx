import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Login from "../page/auth/Login";
import Register from "../page/auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children:[
        {
            path:'',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/register',
            element:<Register />
        },
    ]
  },
]);
