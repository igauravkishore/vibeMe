import ico  from "./th.jpeg"
import React, { useState }  from "react"
import{useNavigate} from "react-router-dom"
import { makePost } from "../utils/ServerHelper"

import Cookies from "js-cookie";
// import { useState} from "react";
import "../index.css"
import "../output.css"



 export  default function SignupComponent(){
    // const[auth,setauth]=useState(null);
    const [email,setEmail]=useState("");
    // console.log(email)
    const [confirmPassword,setConfirmPassword]=useState("");
    // const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setusername]=useState("");
    // const[cookie,setCookie]= useCookies(["token"]);
    // const cookies = new Cookies();
  const navigate= useNavigate();

    const signUp = async()=>{
      if(password !== confirmPassword){
        alert(
          "Password and confirm Password fields must match. please check again"
        );
        return;
      }
      const data={email,password,username,firstName,lastName};
      console.log(data)
      const response = await makePost("/auth/register",data);
      if(response && !response.err){
        console.log(response);
        const token = response.token;
        const current = new Date();
        const nextYear = new Date();
        nextYear.setFullYear(current.getFullYear() + 1);
        // date.setDate(date.setDate()+30);
        Cookies.set('token',token,{path:"/",expires:nextYear,});
        // document.cookie=`token=${token};path="/";expires=${date}`
        // console.log(document.cookie);
        alert("success");
        // navigate("/home")
      }
      else{
        alert("failure");
      }
    };
    // const TextInput=({label,placeholder,className,value,setValue})=>{
    return (
    <>




  {/* <html className="h-full bg-white"/> */}
  {/* <body className="h-full"/> */}
  

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img className="" */}
    <img className="mx-auto h-10 w-auto" src={ico} alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2 onChange">
          <input id="email" label="Email Address" value={email}  autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          // onChange={(e)=>{e.setValue;
            
          //   }}
          
          
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
         
        </div>
        <div className="mt-2">
          <input id="password" placeholder=" Set password" label="Create Password" value={password}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           onChange={(event)=>{
            setPassword(event.target.value)
          }}
          />
        </div>

       
      </div>

      <div>
        <label htmlFor="Confirm Password" className="block text-sm font-medium leading-6 text-gray-900">Comfirm Password</label>
        <div className="mt-2">
          <input id="confirmpassword" placeholder=" confirm password" label="confirm password" value={confirmPassword}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           onChange={(e)=>{
            setConfirmPassword(e.target.value)
          }}
          
          />
        </div>
        
      </div>
      <div>
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div className="mt-2">
          <input id="username" placeholder=" username" label="username" value={username}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           onChange={(e)=>{
            setusername(e.target.value)
          }}
          
          />
        </div>
        
      </div>

      <div className="flex">
        <div>
        <label htmlFor="First Name" className="block text-sm font-medium ml-3 leading-6 text-gray-900">First Name</label>
        <div className="mt-2 ml-3 mr-5">
          <input id="text" label="First Name" placeholder="First Name" value={firstName}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           onChange={(e)=>{
            setFirstName(e.target.value)
          }}
          />
        </div>
        </div>

        <div>
        <label htmlFor="LastName" className="block text-sm font-medium leading-6 ml-3  text-gray-900 justify-center justify-around">Last Name</label>
        <div className="mt-2 ml-3 mr-5">
        <input id="text" label="First Name" placeholder="First Name" value={lastName}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         onChange={(e)=>{
          setLastName(e.target.value)
        }}
        />
        </div>
        </div>


      </div>

  
      

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={(e)=>{e.preventDefault();
        signUp();
        }}>Sign Up</button>
      </div>

      <div className="w-full border border-solid border-gray-300"></div>

<div className="my-6 font-semibold text-xt">
  Already have an account?
</div>

{/* <div className="border border-gray-500 w-full flex items-center justify-center py-2 rounded-full bg-green"> Sign Up for spotify</div> */}

<div>
  <button type="submit" className="flex w-full justify-center rounded-full bg-green-600 px-3 py-2 ">Sign in</button>
</div>
    </form>

    
  </div>
  
</div>


 </>
    
    )
  }
    
    



