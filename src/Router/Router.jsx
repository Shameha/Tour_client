import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import AddVol from "../Pages/AddVol/AddVol";
import Need from "../Pages/Need/Need";
import CheckOut from "../Pages/checkOut/CheckOut";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:5000/volunteer')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/singup',
            element:<SignUp></SignUp>
        },
        {
            path:'/added',
            element:<AddVol></AddVol>
        },
        {
            path:'/need',
            element:<Need></Need>,
            loader: ()=> fetch('http://localhost:5000/volunteer')
        },
        {
            path:'/check/:id',
            element:<CheckOut></CheckOut>,
            loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`)
            
        },
        {
            path:'/detail/:id',
            element:<Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`)
            
        }

      ]
    },
  ]);

  export default router;