import { NavLink } from "react-router-dom";


const Menu = () => {
    const menu = <>
     <li className="text-white font-bold">
     <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-mainColor font-bold" : ""
  }
>
  HOME
</NavLink>
     </li>
     <li className="text-white font-bold">
     <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-mainColor font-bold" : ""
  }
>
  ABOUT US
</NavLink>
     </li>
     <li className="text-white font-bold">
     <NavLink
  to="/services"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-mainColor font-bold" : ""
  }
>
  SERVICE
</NavLink>
     </li>
    </>
    return menu
};

export default Menu;