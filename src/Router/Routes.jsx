import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/home/home/Home";
import Services from "../pages/services/Services";
import About from "../pages/about/About";
import Register from "../components/register/Register";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/services',
                element:<Services/>
            }
        ]
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/login',
        element:<Login/>
    }
])

export default router