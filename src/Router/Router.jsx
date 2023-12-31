import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import CheckOut from "../Page/CheckOut/CheckOut";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/checkout/:id",
        element:<CheckOut></CheckOut>,
      },
    ]
    },
  ]);

  export default router;