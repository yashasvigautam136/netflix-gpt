import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const[isSignInForm, setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);


    }
    return(
    <div className="min-h-screen bg-black">
<Header/>
<div className="absolute top-5 left-5 ">
    <img className=" w-44 z-10" 
    src ="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
</div>
<div className="absolute inset-0 flex items-center justify-center z-10">

<form className="relative z-10 w-full max-w-md bg-black bg-opacity-80 p-12 rounded-lg flex flex-col ">
<h1 className="text-3xl font-bold text-white mb-6">{isSignInForm ?"Sign In":"Sign Up"}</h1>
{!isSignInForm &&( <input type="text" placeholder="Full Name" className="p-3 m-2 bg-gray-800 rounded text-white placeholder-gray-400"/>)}

    <input type="text" placeholder="Email address" className="p-3 m-2 bg-gray-800 rounded text-white placeholder-gray-400"/>

    <input type="password" placeholder="Password" className="p-3 m-2 bg-gray-800 rounded text-white placeholder-gray-400"/>
    <button className="p-3 m-2 bg-red-600 rounded text-white font-semibold hover:bg-red-700">{isSignInForm ?"Sign In":"Sign Up"}</button>
    <div className="flex justify-between text-gray-400 text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <a href="#" className="hover:underline">Need help?</a>
                    </div>
                    <div className=" py-4 text-gray-400 mt-8 cursor-pointer hover:underline ml-1">
                        <p onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?  Sign Up Now" : "Already Registered Sign In Now"}
                            {/* <a href="#" className="text-white hover:underline ml-1">Sign up now</a>. */}
                        </p>
                    </div>
                    <div className="text-gray-400 text-xs mt-4">
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                            <a href="#" className="text-blue-500 hover:underline ml-1">Learn more</a>.
                        </p>
                    </div>
</form>
</div>
    </div>)

}
export default Login;
