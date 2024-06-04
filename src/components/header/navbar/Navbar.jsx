import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import Menu from "../menu/Menu";
import Logo from "../logo/Logo";

const Navbar = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <>
      <div className="navbar bg-transparent absolute z-40">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <Menu/>
            </ul>
          </div>
          <Logo/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <Menu/>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoUrl ? user.photoUrl : 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'} />
            </div>
          </div>
          :
          <a className="btn">Button</a>

          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
