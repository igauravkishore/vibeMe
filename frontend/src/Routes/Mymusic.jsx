import React from 'react'
import Sidebar from './Sidebar'
import {Howl,Howler}from 'howler';
import Singlesong from './Singlesong'
import { useState,useEffect } from 'react'
import { makeAuthGet } from '../utils/ServerHelper'
import Navbar from './Navbar';
import Bottombar from './Bottombar';
import { useContext } from 'react';
import Songcontext from '../context/Songcontext';



export default function Mymusic() {
    
    const [songData, setSongData]=useState([]);
    // const[soundplay,setsoundplay]=useState(null);
    const {currentSong,setCurrentSong}= useContext(Songcontext)

    // const playSound=(songsrc)=>{
    //   if(soundplay){
    //     soundplay.stop()
    //   }
    //   let sound= new Howl({
    //     src:[songsrc],
    //     html5:true
    //   });
    //   setsoundplay(sound);
    //   sound.play();
    // }
   
    useEffect(()=>{
        const getData=async ()=>{
            const response = await makeAuthGet("/song/get/mysongs")
            console.log(response.data)
            setSongData(response.data)
        };
      getData();
      
    },[])

  return (
    
        <div className="h-full w-full ">
          <div  className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>
               <div className="h-full w-1/5 bg-black flex item-center justify-start cursor-pointer ">

                    <Sidebar/>
                </div>
           <div className="h-full w-4/5 bg-app-black justify-end justify-around overflow-auto">
             
                <div>
                  <Navbar/>
                </div>
                <div className='text-white text-2xl mt-4 ml-4 font-semibold'>
                    MY MUSIC
                </div>
                 <div className='ml-4'>
                   {
                    songData.map((it)=>{
                      return <Singlesong key={it.name} info={it} />
                    })
                   }
                    
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
       
  )
}
