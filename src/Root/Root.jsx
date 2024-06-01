import { Outlet } from "react-router-dom";
import Header from "../components/header/header/Header";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;