import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div>
            <Link to={'/'} className="text-white text-2xl font-bold">Games World</Link>
        </div>
    );
};

export default Logo;