import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EventDetail from "../EventDetail/EventDetail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Events from "../Events/Events";
import Courses from "../Courses/Courses";

const mycreateRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: () =>(fetch('/events.json'))
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/event',
            element:<PrivateRoute><Events></Events></PrivateRoute>
        },
        {
            path:'/course',
            element:<PrivateRoute><Courses></Courses></PrivateRoute>
        },

        {
            path:'/eventdetail',
            element:<EventDetail></EventDetail>,
            loader:() =>(fetch('/events.json'))
        }

      ]
    },
  ]);

export default mycreateRouter;