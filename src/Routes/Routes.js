import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Course from "../Components/Courses/Course";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";


export const routes = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:
        
        [
         
            {
                path:'/',
                element: <Home></Home>
            },

            {
                path:'/course',
                element: <Course></Course>
            },

            {
                path:'/faq',
                element: <Faq></Faq>
            },

            {
                path:'/blog',
                element: <Blog></Blog>
            },

            
        ]
    }

])