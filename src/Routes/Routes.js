import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../AllCourse/AllCourse/AllCourse";
import Blog from "../Components/Blog/Blog";
import Course from "../Components/Courses/Course";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Category from "../CourseCatecory/Category/Category";
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
                element: <Course></Course>,
            },   
            
            {
                        path: '/category/:id',
                        element: <Category></Category>,
                        loader : ({params}) => fetch (`http://localhost:5000/courses/${params.id}`)
          },
           
          {
                        path: '/courses/:id',
                        element: <AllCourse></AllCourse>
         },
                
            
        

            {
                path:'/faq',
                element: <Faq></Faq>
            },

            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },

            
        ]

        
    

    }

  

])