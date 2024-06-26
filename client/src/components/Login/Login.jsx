import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import SocialSign from "../socialSign/SocialSign";
import axios from "axios"


const Login = () => {
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')

    const {loginUser} = useContext(AuthContext)


    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        setLoginError('')
        setLoginSuccess('')
        loginUser( email, password)
        .then(result =>{
            console.log(result.user);
            // setLoginSuccess('Sign In Successfully')
            const user = {email}
            axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
            .then(res =>{
              console.log(res.data);

            })
        })
        .catch(err =>{
            console.log(err.message);
            setLoginError(err.message)
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
         <div className="w-full lg:w-1/2 flex items-center justify-center">
           <div className="max-w-md w-full p-6">
             <h1 className="text-3xl font-semibold mb-6 text-mainColor text-center">Sign In <Link to={'/'}>Games World</Link></h1>
             <h1 className="text-sm font-semibold mb-6 text-white text-center">Join Our Community with all time access and free </h1>
             <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
              <SocialSign/>
             </div>
             <div className="mt-4 text-sm text-gray-600 text-center">
               <p className="text-white">or with email</p>
             </div>
             <form onSubmit={handleLogin} method="POST" className="space-y-4">
              {/*  <!-- Form elements --> */}
               
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                 <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
               </div>
               <div>
                 <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                 <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
               </div>
               <div>
                 <button type="submit" className="w-full bg-mainColor text-white font-bold p-2 rounded-md hover:bg-white hover:text-mainColor focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign In</button>
               </div>
             </form>
             <div className="text-center">
      {
        loginError ?  <p className="text-red-500">{loginError}</p>
        :
        <p className="text-green-500">{loginSuccess}</p>
        
      }
      
      </div>
             <div className="mt-4 text-sm text-gray-600 text-center">
               <p className="text-white">If have not an account? <Link to={'/register'} className="text-mainColor font-semibold hover:underline">Sign Up</Link>
               </p>
             </div>
           </div>
         </div>
       </div>
    );
};

export default Login;