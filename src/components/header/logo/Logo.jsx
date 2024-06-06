import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div>
            <Link to={'/'} className="text-white text-2xl font-bold"><span className="text-mainColor py-2 px-1 rounded-md bg-white">Games</span> World</Link>
        </div>
    );
};

export default Logo;