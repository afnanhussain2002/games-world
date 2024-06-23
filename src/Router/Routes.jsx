import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/home/home/Home";
import About from "../pages/about/About";
import Register from "../components/register/Register";
import Login from "../components/Login/Login";
import GameDetails from "../pages/gameDetails/GameDetails";

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
                path:'/:id',
                element:<GameDetails/>

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