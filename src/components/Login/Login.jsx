import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import SocialSign from "../socialSign/SocialSign";


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
            setLoginSuccess('Sign In Successfully')
        })
        .catch(err =>{
            console.log(err.message);
            setLoginError(err.message)
        })
    }
    return (
        <div className="flex h-screen">
        {/*  <!-- Left Pane --> */}
         <div className="hidden lg:flex items-center justify-center flex-1 bg-[url('https://img.freepik.com/free-photo/full-shot-ninja-wearing-equipment_23-2150960926.jpg?t=st=1717218504~exp=1717222104~hmac=c619c11512926bea6ec2e42b9307ceb05b80e6028c885d0ae3ce5e2f5e88fd64&w=1380')] bg-cover text-black">
           <div className="max-w-lg text-center">
           
           </div>
         </div>
        {/*  <!-- Right Pane --> */}
         <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
           <div className="max-w-md w-full p-6">
             <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign In <Link to={'/'}>Games World</Link></h1>
             <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Join Our Community with all time access and free </h1>
             <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
              <SocialSign/>
             </div>
             <div className="mt-4 text-sm text-gray-600 text-center">
               <p>or with email</p>
             </div>
             <form onSubmit={handleLogin} method="POST" className="space-y-4">
              {/*  <!-- Form elements --> */}
               
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                 <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
               </div>
               <div>
                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                 <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
               </div>
               <div>
                 <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
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
               <p>Already have an account? <Link to={'/register'} className="text-black font-semibold hover:underline">Sign Up</Link>
               </p>
             </div>
           </div>
         </div>
       </div>
    );
};

export default Login;