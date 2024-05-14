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
import VolNeed from "../Pages/VolNeed/VolNeed";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
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
            element:<PrivateRoute><AddVol></AddVol></PrivateRoute>
        },
        {
            path:'/need',
            element:<Need></Need>,
            loader: ()=> fetch('http://localhost:5000/volunteer')
        },
        {
            path:'/check/:id',
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`)
            
        },
        {
            path:'/detail/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`)
            
        },
        {
            path:'/grid',
             element:<PrivateRoute><Grid></Grid></PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/volunteer')
            
        },
        {
            path:'/post',
            element:<PrivateRoute><VolPost></VolPost></PrivateRoute>
            
        },
        {
            path:'/vol',
            element:<PrivateRoute><VolNeed></VolNeed></PrivateRoute>
            
        },
        {
            path:'/update/:id',
            element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>
            
        }

      ]
    },
  ]);

  export default router;