
// import{icon} from "@iconify/tailwind";
import ico  from "./th.jpeg"
import React, { useState }  from "react"
// import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import { makePost } from "../utils/ServerHelper";
import Cookies from "js-cookie";
// import "../index.css"
// import "../output.css"

 export  default function Logincomponent(){
    // const[auth,setauth]=useState(null);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate= useNavigate();
    
    const login = async()=>{
      // if(password !== confirmPassword){
      //   alert(
      //     "Password and confirm Password fields must match. please check again"
      //   );
      //   return;
      // }
      const data={email,password};
      console.log(data)
      const response = await makePost("/auth/login",data);
      if(response && !response.err){
        console.log(response);
        const token = response.token;
        console.log(token)
        const current = new Date();
        const nextYear = new Date();
        nextYear.setFullYear(current.getFullYear() + 1);
        // date.setDate(date.setDate()+30);
        Cookies.set('token',token,{path:"/",expires:nextYear,});
        // document.cookie=`token=${token};path="/";expires=${date}`
        // console.log(document.cookie);
        alert("success");
        navigate("/home")
      }
      else{
        alert("failure");
      }
    };

    return (
    <>




  {/* <html className="h-full bg-white"/> */}
  {/* <body className="h-full"/> */}
  

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img className="" */}
    <img className="mx-auto h-10 w-auto" src={ico} alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" placeholder="email" name="email"  value={email} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           onChange={(e)=>{
            setEmail(e.target.value)
          }}
          />
        </div>
      </div>

      <div>
        {/* <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          >Password</label>
         
        </div> */}
        <div className="mt-2">
          <input id="password" placeholder="  password" name="password" value = {password} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
        </div>
      </div>

      <div>
        <button type="submit" onClick={(e)=>{
          e.preventDefault();
          login();
        }} className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>

      <div className="w-full border border-solid border-gray-300"></div>

      <div className="my-6 font-semibold text-xt">
        Don't have an account?
      </div>

      {/* <div className="border border-gray-500 w-full flex items-center justify-center py-2 rounded-full bg-green"> Sign Up for spotify</div> */}

      <div>
        <button type="submit"className="flex w-full justify-center rounded-full bg-green-600 px-3 py-2 ">Sign up for spotify</button>
      </div>
    </form>

    
  </div>
</div>
 </>
    
    )
    
    
}
{/* export default Logincomponent; */}

