import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialSign = () => {
  const { googleSign, facebookSign } = useContext(AuthContext);
  const navigate = useNavigate();

  // google sign
  const handleGoogleSign = () => {
    googleSign()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Sign in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // facebook sign
  const handleFacebookSign = () => {
    facebookSign()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Facebook Sign in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
        <button
          onClick={handleGoogleSign}
          type="button"
          className="w-full flex justify-center items-center gap-2 bg-mainColor text-sm font-bold text-white p-2 rounded-md hover:bg-white hover:text-mainColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
        >
          <FaGoogle /> Sign Up with Google
        </button>
      </div>
      <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
        <button
          type="button"
          onClick={handleFacebookSign}
          className="w-full flex justify-center items-center gap-2 bg-mainColor text-sm font-bold text-white p-2 rounded-md hover:bg-white hover:text-mainColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
        >
          <FaFacebook /> Sign Up with Facebook
        </button>
      </div>
    </>
  );
};

export default SocialSign;
