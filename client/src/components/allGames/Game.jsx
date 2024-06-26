import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar  } from "react-icons/fa";

const Game = ({ game }) => {
  const {
    _id,
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
  } = game;
  return (
    <>
      <Link to={`/allGames/${_id}`}>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg grid bg-mainColor">
          <img className="w-full h-64" src={banner_img} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{title}</div>
            <p className="text-white text-base">{description}</p>
            <Rating
              initialRating={rating}
              emptySymbol={<FaRegStar/>}
              fullSymbol={<FaStar/>}
              readonly={true}
              className="text-2xl"
            />
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Game;
