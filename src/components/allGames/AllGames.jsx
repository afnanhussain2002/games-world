import { useEffect, useState } from "react";
import Game from "./Game";


const AllGames = () => {
    const [allGames, setAllGames] = useState([])

    useEffect(()=>{
        fetch('./data/games.json')
        .then(res => res.json())
        .then(data => setAllGames(data.games))
    },[])
    return (
        <div className="bg-[url('https://images.hdqwalls.com/wallpapers/the-witcher-3-wild-hunt-gerald-artwork-xt.jpg')] bg-center rounded-2xl mt-5 mb-5">
            <div className="bg-black bg-opacity-50 rounded-2xl">

            <h3 className="text-5xl text-center font-semibold text-white py-5"><span className="text-mainColor">Develop</span> Your Game By Us</h3>
            <div className=" max-w-7xl py-5 mx-auto grid justify-center gap-3 grid-cols-1 lg:grid-cols-3">

            {
                allGames?.map(game => <Game key={game.id} game={game}></Game>)
            }
            </div>
            </div>
        </div>
    );
};

export default AllGames;