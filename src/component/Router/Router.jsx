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
import Commentor from "../Commentor/Commentor";
import About from "../About/About";
import Feature from "../Feature/Feature";

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
            path:'/about',
            element:<PrivateRoute><About></About></PrivateRoute>
        },
        {
            path:'/feature',
            element:<PrivateRoute><Feature></Feature></PrivateRoute>
        },
        {
            path:'/course',
            element:<PrivateRoute><Courses></Courses></PrivateRoute>
        },

        {
            path:'/eventdetail',
            element:<EventDetail></EventDetail>,
            loader:() =>(fetch('/events.json'))
        },
        {
          path:'/commentor',
          element:<Commentor></Commentor>,
          loader:() =>(fetch),
        }

      ]
    },
  ]);

export default mycreateRouter;