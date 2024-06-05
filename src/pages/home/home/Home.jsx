import AllGames from "../../../components/allGames/AllGames";
import HomeAbout from "../homeAbout/HomeAbout";
import HomeBanner from "../homeBanner/HomeBanner";
import OurMission from "../ourMission/OurMission";


const Home = () => {
    
    return (
        <div>
            
            <HomeBanner/>
            <div className="bg-[url('https://i.ibb.co/PxTzSHq/raid-shadow-legends-guide.jpg')] bg-cover bg-center rounded-2xl mt-5">
            <HomeAbout/>
            <OurMission/>
            </div>
            <AllGames/>
        </div>
    );
};

export default Home;