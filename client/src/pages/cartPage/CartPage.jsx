import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/axiosSecure/useAxiosSecure";

const CartPage = () => {
  const { user, loading } = useContext(AuthContext);
  const [cartGames, setCartGames] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    if (!loading && user?.email) {
      /* fetch(`http://localhost:5000/cart?email=${user.email}`,{
        credentials:'include'
      })
        .then((res) => res.json())
        .then((data) => {
          setCartGames(data);
          setIsFetching(false);
        }); */
        axiosSecure.get(`http://localhost:5000/cart?email=${user.email}`)
        .then(res =>{
          setCartGames(res.data)
          setIsFetching(false)
        })
        
    }
  }, [user, loading, axiosSecure]);

  if (loading || isFetching) {
    return <span>Loading...</span>;
  }
 
  return (
    <>
  
      <div className="hero min-h-screen bg-[url('https://www.theloadout.com/wp-content/sites/theloadout/2022/02/elden-ring-review.jpg')]">
        <div className=" text-center w-full h-full flex  justify-center items-center backdrop-brightness-50">
          <div className="max-w-md text-white">
            <h1 className="text-5xl font-bold text-white">
              <span className="text-mainColor py-2 px-1 rounded-md bg-white">
                Cart
              </span>{" "}
              Page
            </h1>
            <p className="py-6 text-white max-w-2xl">
              Welcome to Games World, your ultimate destination for all things
              gaming!
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-5xl text-center font-bold text-white">Total Cart: {cartGames.length}</h3>
     <div className="flex gap-2">
      {cartGames.map((cart) => (
        <>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={cart.banner_img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cart.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      ))}

     </div>
    </>
  );
};

export default CartPage;
