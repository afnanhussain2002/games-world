import { NavLink } from "react-router-dom";


const Menu = () => {
    const menu = <>
     <li>
     <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-mainColor" : ""
  }
>
  HOME
</NavLink>
     </li>
     <li>
     <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-mainColor" : ""
  }
>
  ABOUT US
</NavLink>
     </li>
     <li>
     <NavLink
  to="/services"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-mainColor" : ""
  }
>
  SERVICE
</NavLink>
     </li>
    </>
    return menu
};

export default Menu;