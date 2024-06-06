
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";


const GameDetails = () => {
    // const data = useLoaderData()
    const {games} = useContext(AuthContext)
    const {id} = useParams()
    console.log('data',games);
    console.log('id',id);
   

    const filterGame =games?.find((singleGame) => singleGame.id == id)

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
      } = filterGame;

    return (
        <div>
            <img src={banner_img} alt="" />
        </div>
    );
};

export default GameDetails;