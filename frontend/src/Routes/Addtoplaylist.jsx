import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Bottombar from './Bottombar'
import { useContext } from 'react'
import { useState,useEffect } from 'react'
import Songcontext from '../context/Songcontext'
import { makeAuthGet, makeAuthPost, makePost } from '../utils/ServerHelper'

export default function Addtoplaylist() {

    const {currentSong,setCurrentSong}= useContext(Songcontext)
    const [songData, setSongData]=useState([]);
    // const [myplaylist, setmyplaylist]=useState([]);

    const [myplaylist, setmyplaylist]=useState([]);

    useEffect(()=>{
        const getData=async ()=>{
          const response=await makeAuthGet("/playlist/get/me");
          setmyplaylist(response.data);
          console.log(response.data)
        };
        getData();
      }, []);
      const addsongToPlaylist= async(playListId)=>{
        const songId= currentSong._id
        const payload={playListId, songId}
        console.log(payload)
        const response=await makeAuthPost("/playlist/add/song",payload)
        if(!response.err){
          console.log(response)
          alert("Success")
        }
        console.log(response.err)
        // alert("failure")
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
                <div className='text-white text-2xl font-semibold mt-5 ml-5 '>
                    Add to Playlist
                </div>
                <div className='text-white font-semibold mt-10 mb-4 ml-5'>
                    Song Name
                </div>
                <div className='space-y-4 flex flex-col ml-4 justify-center items-center'>
                    {myplaylist.map((item)=>{
                        return <PlaylistComponent info={item} addsongToPlaylist={addsongToPlaylist}/>;
                    })}
                     </div>
                {/* <input id="songname" onChange={(e)=>{
                    setsongname(e.target.value)
                }} placeholder=" Write the name of your Song" value={songname} required className="block w-1/2 ml-6 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         
                 /> */}
                 {/* <div className="text-white  font-bold  pt-25 mt-20 mb-3 ml-20 ml-6"> Thumbnail</div> */}
               {/* <div className="ml-20">
                   {
                    thumbname?(
                    <div className="bg-white text-black hover:text-black hover:bg-gray-400  rounded-full hover:bg-black hover:text-gray-400 p-3 font-semibold">{thumbname}</div>
                    )
                  :
                  <ImageUpload  setUrl={setthumb} setName={setthumbname}/>
                }
                </div> */}
                {/* <button
                  className="bg-white text-black hover:text-black hover:bg-gray-400 rounded-full p-3 mt-20 mr-10 text-center justify-end hover:text-bold font-semibold"
                  
                  onClick={create}>
                Submit song
                </button> */}

               
               
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
const PlaylistComponent=({info, addsongToPlaylist})=>{
    return(
        <div className='bg-app-black w-full flex items-center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 cursor-pointer p-3' onClick={()=>{
            addsongToPlaylist(info._id)
        }}>
            <div>
                <img src={info.thumbnail} className=' w-11 h-11 rounded'/>
            </div>
            <div className='text-white font-semibold'>{info.name}</div>
        </div>
    );
};

