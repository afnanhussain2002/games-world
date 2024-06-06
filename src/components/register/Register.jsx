import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialSign from "../socialSign/SocialSign";
import auth from "../../firebase/firebase.config";


const Register = () => {

    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')

    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegisterError('')
        setRegisterSuccess('')
        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            // update profile
            updateProfile(auth.currentUser,{
              displayName: name, photoURL: photo
            }).then(()=>{
              console.log('profile updated');
            })
            .catch(err =>{
              console.log(err);
            })

            setRegisterSuccess('User Created Successfully')
        })
        .catch(err =>{
            console.log(err.message);
            setRegisterError(err.message)
        })
    }
    return (
                 
<div className="flex h-screen">
 {/*  <!-- Left Pane --> */}
  <div className="hidden lg:flex items-center justify-center flex-1 bg-[url('https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/elden-ring-shadow-of-the-erdtree-preview.jpg?q=70&fit=contain&w=1140&h=&dpr=1')] bg-center bg-cover text-black">
    <div className="max-w-lg text-center">
    
    </div>
  </div>
 {/*  <!-- Right Pane --> */}
  <div className="w-full bg-[url('')] lg:w-1/2 flex items-center justify-center">
    <div className="max-w-md w-full p-6">
      <h1 className="text-3xl font-semibold mb-6 text-mainColor text-center">Sign Up <Link to={'/'}>Games World</Link></h1>
      <h1 className="text-sm font-semibold mb-6 text-white text-center">Join to Our Community with all time access and free </h1>
      <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
        <SocialSign/>
      </div>
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p className="text-white">or with email</p>
      </div>
      <form onSubmit={handleRegister} method="POST" className="space-y-4">
       {/*  <!-- htmlForm elements --> */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
          <input required type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
        </div>
        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-white">Photo Url</label>
          <input required type="text" id="photo" name="photo" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input required type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
          <input required type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
        </div>
        <div>
          <button type="submit" className="w-full bg-mainColor text-white font-bold p-2 rounded-md hover:bg-white hover:text-mainColor focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
        </div>
      </form>
      <div>
      {
        registerError ?  <p className="text-red-500">{registerError}</p>
        :
        <p className="text-green-500">{registerSuccess}</p>
        
      }
      
      </div>
      <div className="mt-4 text-sm text-gray-600 text-center">
      <p className="text-white">Already have an account? <Link to={'/login'} className="text-mainColor font-semibold hover:underline">Sign In</Link>
               </p>
      </div>
    </div>
  </div>
</div>
      
    );
};

export default Register;