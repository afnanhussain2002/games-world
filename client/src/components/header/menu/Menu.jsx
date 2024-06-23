import { NavLink } from "react-router-dom";


const Menu = () => {
    const menu = <>
     <li className="text-white font-bold">
     <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-mainColor font-bold bg-white" : ""
  }
>
  HOME
</NavLink>
     </li>
     <li className="text-white font-bold">
     <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-mainColor font-bold bg-white" : ""
  }
>
  ABOUT US
</NavLink>
     </li>
    
    </>
    return menu
};

export default Menu;