import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";
import About from "../Components/404 Page/About";
import Blog from "../Components/Blog/Blog";
import Course from "../Components/Courses/Course";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Category from "../CourseCatecory/Category/Category";

import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children:

            [

                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/course',
                    element: <Course></Course>,
                },

                {
                    path: '/category/:id',
                    element: <Category></Category>,
                    loader: ({ params }) => fetch(` https://blockchain-course-server.vercel.app/courses/${params.id}`)
                },

                {
                        path:'/checkout',
                        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
                },
                
                {
                    path: '/faq',
                    element: <Faq></Faq>
                },

                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path:'*',
                    element: <About></About>
            }

            ]




    }



])