// import React from 'react'
import iconn from "./n.jpeg";
// import IconText from "../components/IconText";
import home from "./ho.jpg";
import search from "./searchh.png";
import lib from "./lib.jpeg";
import React from "react";
import playlist from "./playlist.jpeg";

import like from "./like.svg";
import mymusic from "./mymusic.png";
import { Link, useNavigate } from "react-router-dom";
// import Sidebar from "../assets/Sidebar";
export default function Sidebar() {
  const navigate =useNavigate();
  const gotomusic=()=>{
    navigate('/mymusic')
  }
  const gotohome=()=>{
    navigate('/home')
  }

  return (
    <>
               <div className="py-3 ">
             <img className="mx-auto h-10 w-auto mt-3  " src={iconn} alt="Your Company"/>

             <img className="mx-auto h-10 w-auto mt-3 flex py-2 " src={home}  alt="Your Company"/>
             
             <img className="mx-auto h-6 w-6 mt-1 flex bg-white py-2 " src={search}  alt="Your Company"/>

             <img className="mx-auto h-10 w-auto mt-1 flex py-2 " src={lib}  alt="Your Company"/>
              
             <img className="mx-auto h-10 w-auto mt-5 flex py-2 "src={playlist} alt="Your Company"/>

             <img className="mx-auto h-10 w-auto mt-1 flex py-2" src={like}  alt="Your Company" />
             <img className="mx-auto h-10 w-auto  flex py-2" src={mymusic} alt="Your Company"/>
             

             </div> 
             <div className="py-3 mr-20 overflow-auto text-gray-400">
             <div className="text-white text-2xl font-bold hover:text-gray mt-3 my-100  mr-10 ml-2 "><h1>Spotify</h1></div>
                
                
                  {/* className="text-white size-200px font-bold mx-5 my-3 " */}
            
                  <div className=" font-semibold hover:text-white  pl-4 text-sm mt-7 mb-5  " onClick={gotohome} >Home</div>

                  <Link to="/search" className="  font-semibold hover:text-white pl-4  text-sm" >Search</Link>

                  <div className="  font-semibold hover:text-white pl-4  mt-3 text-sm   " onClick={()=>{
                    navigate("/library")
                  }}>library</div>
                  
                  <br/>

                  <div className=" font-semibold hover:text-white pl-4 text-sm py-3" onClick={()=>{
                    navigate("/playlist")
                  }}> Playlist</div>
                    

                  <div className=" font-semibold hover:text-white mx-1 pl-2 text-sm mt-2">Liked Songs</div>
                  <div className="ml-4 font-semibold hover:text-white mt-7 text-sm mt-4" onClick={gotomusic}>My music</div>

                    <br/>
                    <br/>
                    <br/>


                    <br/>
                    <br/>
                    <br/>
                  <div className="mt-20 mr-12 ">
              <button type="submit" className=" border border-gray-100 flex w-full justify-center rounded-full bg-black px-3 py-1.5  font-bold leading-6 text-white shadow-sm hover:text-gray ">English</button>
              </div>
             </div>

             
             
               
               
    </>
  )
}
