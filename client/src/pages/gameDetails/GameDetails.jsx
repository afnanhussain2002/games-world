
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";


const GameDetails = () => {
    // const data = useLoaderData()
    const {games, loading} = useContext(AuthContext)
    const {id} = useParams()
    console.log('data',games);
    console.log('id',id);
    const detailsGame = useLoaderData()
   

    const filterGame =games?.find((singleGame) => singleGame.id == id)

    if(loading){
      return <div><span className="loading loading-bars loading-lg"></span></div>
    }

    console.log(filterGame);
    const {
      
        title,
        banner_img,
        description,
        genre,
        platforms,
        release_date,
        developer,
        publisher,
        rating,
        price,
        media,
      } = detailsGame;

     

    return (
        <>
        
        <div
        className="hero min-h-screen bg-[url('https://wallpaperaccess.com/full/3026451.jpg')] bg-cover bg-center"
      >
        
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
      
          </div>
        </div>
      </div>
    <div className="flex justify-center">
      <iframe width="560" height="315" src={media.videos[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
        
      <div className="mt-10 flex max-w-7xl mx-auto gap-10 ">
        <div className="flex flex-col text-left flex-1 text-white font-bold text-xl">
        <p> Description: {description} </p><br />
         <p>Genre: {genre}</p><br />
         <p>Educational Requirements: {}</p><br />
         <p>Experiences: {}</p>
        </div>
        <div className="bg-gray-100 p-5 text-left">
             <p className="font-bold">Game Details</p><br />
             <hr />
             <p><span className="font-bold">Price: ${price}</span></p><br />
             <p><span className="font-bold">Game Title: {title}</span></p><br />
             <p className="font-bold">Contact Information</p><br />
             <hr />
             <p><span className="font-bold">Developer: {developer}</span></p><br />
             <p><span className="font-bold">Publisher: {publisher}</span></p><br />
             <p><span className="font-bold">Release Date: {release_date}</span></p><br />
             <a href="https://tinyurl.com/buyPcGames" className="btn bg-mainColor text-white">Buy Now</a>
        </div>
      </div>
      <div>
     
      </div>
        </>
    );
};

export default GameDetails;