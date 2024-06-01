import HomeBanner from "../../../pages/home/homeBanner/HomeBanner";
import Navbar from "../navbar/Navbar";


const Header = () => {
    return (
        <div className="bg-[url('https://graphicriver.img.customer.envatousercontent.com/files/260940805/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=05b61b72a97d93f78e70470237144579')] bg-cover ">
            <Navbar/>
            <HomeBanner/>
        </div>
    );
};

export default Header;