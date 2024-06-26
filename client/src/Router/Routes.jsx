import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/home/home/Home";
import About from "../pages/about/About";
import Register from "../components/register/Register";
import Login from "../components/Login/Login";
import GameDetails from "../pages/gameDetails/GameDetails";
import PrivateRoute from "../provider/privateRoute/PrivateRoute";
import CartPage from "../pages/cartPage/CartPage";

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
                path:'/allGames/:id',
                element:<PrivateRoute><GameDetails/></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/allGames/${params.id}`)

            },
            {
                path:'/cart',
                element:<CartPage/>
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