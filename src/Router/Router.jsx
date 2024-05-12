import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import AddVol from "../Pages/AddVol/AddVol";
import Need from "../Pages/Need/Need";
import CheckOut from "../Pages/checkOut/CheckOut";
import Details from "../Pages/Details/Details";
import Grid from "../Pages/Grid/Grid";
import VolPost from "../Pages/VolPost/VolPost";
import PrivateRoute from "./PrivateRoute";
// import { Grid } from "swiper/modules";

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
            
        },
        {
            path:'/grid',
            element:<Grid></Grid>,
            loader: ()=> fetch('http://localhost:5000/volunteer')
            
        },
        {
            path:'/post',
            element:<PrivateRoute><VolPost></VolPost></PrivateRoute>
            
        }

      ]
    },
  ]);

  export default router;