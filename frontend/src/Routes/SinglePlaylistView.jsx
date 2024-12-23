import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import Bottombar from './Bottombar'
import Sidebar from './Sidebar'
import Songcontext from '../context/Songcontext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { makeAuthGet } from '../utils/ServerHelper'

export default function SinglePlaylistView() {
    const {playlistId}=useParams();
    const {currentSong,setCurrentSong}= useContext(Songcontext)
const [searchtext,setsearchtext]= useState("");
const [songdata,setsongdata]=useState([]);
const [playListDetails, setPlayListDetails] =useState({});
useEffect(()=>{
  const getData=async ()=>{
    const response = await makeAuthGet("/playlist/get/playlist/" + playlistId);
    console.log(response);
    setPlayListDetails(response)
  };
  getData();
}, []);

  return (
    <>
     {/* <h1>{playlistId}</h1> */}
      <div className="h-full w-full ">
          <div  className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>
               <div className="h-full w-1/5 bg-black flex item-center justify-start cursor-pointer ">

                    <Sidebar/>
                </div>
           <div className="h-full w-4/5 bg-app-black justify-end justify-around overflow-auto">
             
                <div>
                  <Navbar/>
                </div>

                {
                  playListDetails._id &&(
                    <div>
                      <div className='text-white text-2xl font-semibold mt-5 ml-5 '>
                {playListDetails.name}
                </div>
                  
                </div>
                  )                }

                <div className='text-white text-2xl font-semibold mt-5 ml-5 '>
                {playListDetails.name}
                </div>

                
              
              
          

               
               
                      </div>   
               </div>
               {
                currentSong &&
               <div className="h-1/10 bg-gray-600   w-full flex">
             <Bottombar/>
               </div>
}
            </div>
      
      </>
  )
}
