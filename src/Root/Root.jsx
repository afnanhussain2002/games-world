import { Outlet } from "react-router-dom";
import Header from "../components/header/header/Header";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Header/>
            <div className="min-h-screen">
            <Outlet/>

            </div>
            <Footer/>
        </div>
    );
};

export default Root;