import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Bottombar from './Bottombar'
import Navbar from './Navbar'
import Songcontext from '../context/Songcontext'
import { useContext } from 'react'
import ImageUpload from '../utils/Imageupload'
import { makeAuthPost } from '../utils/ServerHelper'
import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies'


export default function Createplaylist() {
    const {currentSong,setCurrentSong}= useContext(Songcontext)
    const [songname, setsongname]=useState("")
    const [thumb, setthumb]=useState("");
    const [thumbname, setthumbname]=useState();
    const [songs,setsongs]=useState([]);
    console.log(songname)

    const create =async()=>{
      const arr={name:songname,thumbnail:thumb,songs}
      const response=await makeAuthPost('/playlist/create',arr)
      console.log(response)
      if(response.err){
        alert("could not create playlist")
        return
      }
      else{
        alert("success")
      }
    }
  return (
    <>

<div className="h-full w-full ">
          <div  className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>
               <div className="h-full w-1/5 bg-black flex item-center justify-start cursor-pointer ">

                    <Sidebar/>
                </div>
           <div className="h-full w-4/5 bg-app-black justify-end justify-around overflow-auto">
             
                <div>
                  <Navbar/>
                </div>
                <div className='text-gray-400 text-2xl font-semibold mt-5 ml-5 '>
                    Create Playlist
                </div>
                <div className='text-gray-300 font-semibold mt-8 ml-8'>
                    Playlist Name
                </div>
                <input id="songname" onChange={(e)=>{
                    setsongname(e.target.value)}}
                placeholder=" Write the name of your Song" value={songname} required className="block w-1/2 ml-6 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         
                 />
                 <div className="text-gray-300  font-bold  pt-25 mt-20 mb-3 ml-20 ml-8"> Thumbnail</div>
                 <input id="thumbname"  onChange={(e)=>{
                    setthumbname(e.target.value)}}
                  placeholder=" Write the name of your Song" value={thumbname} required className="block w-1/2 ml-6 mt-2 mb-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
               <div className="ml-20">
                   {
                    thumbname?(
                    <div className="bg-white text-black hover:text-black hover:bg-gray-400  rounded-full hover:bg-black hover:text-gray-400 p-3 font-semibold">{thumbname}</div>
                    )
                  :
                  <ImageUpload  setUrl={setthumb} setName={setthumbname}/>
                }
                </div>
                <button
                  className=" bg-gray-300 text-black hover:text-black hover:bg-gray-400 rounded-full p-3 mt-20 ml-8 pl-5 pr-5 text-center justify-end hover:text-bold font-semibold"
                  
                  onClick={create}>
                Submit 
                </button>

               
               
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
