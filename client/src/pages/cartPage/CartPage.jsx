
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";


const CartPage = () => {
    const {user} = useContext(AuthContext)
    const [cartGames, setCartGames] = useState([])
    console.log('email',user.email);
    useEffect(() =>{
        fetch(`http://localhost:5000/cart?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    },[user])
    return (
        <div>
            {/* <h3 className="text-5xl text-center">Total Cart: {cartGames.length}</h3> */}
            
        </div>
    );
};

export default CartPage;