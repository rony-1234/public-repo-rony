import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";

const mycreateRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: () =>(fetch('/events.json'))
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
      ]
    },
  ]);

export default mycreateRouter;