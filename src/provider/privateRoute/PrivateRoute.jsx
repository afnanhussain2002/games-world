import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()

    if(loading){
        return <div className="grid h-screen place-items-center">
            <span className="loading loading-bars loading-lg"></span>

        </div>
    }

    if(user){
       return children;
    }
    return navigate('/login')
    
};

export default PrivateRoute;