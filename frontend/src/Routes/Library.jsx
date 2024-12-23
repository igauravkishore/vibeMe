import React from 'react'
import Navbar from './Navbar'
import Bottombar from './Bottombar'
import Sidebar from './Sidebar'
// import Songcontext from '../context/Songcontext'
import Songcontext from '../context/Songcontext'
import { useContext } from 'react'
import { useState,useEffect } from 'react'
import Singlesong from './Singlesong'
import { makeAuthGet } from '../utils/ServerHelper'

export default function Library() {
    const {currentSong,setCurrentSong}= useContext(Songcontext)
    const [songData, setSongData]=useState([]);
    const [myplaylist, setmyplaylist]=useState([]);

    useEffect(()=>{
        const getData=async ()=>{
            const response = await makeAuthGet("/song/get/mysongs")
            console.log(response.data)
            setSongData(response.data)
        };
      getData();
      
    },[])
    

    useEffect(()=>{
      const getData=async ()=>{
        const response=await makeAuthGet("/playlist/get/me");
        setmyplaylist(response.data);
      };
      getData();
    }, []);
  return (
    <>
       <div className="h-full w-full ">
          <div  className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>
               <div className="h-full w-1/5 bg-black flex item-center justify-start cursor-pointer ">

                    <Sidebar/>
                </div>
           <div className="h-full w-4/5 bg-app-black justify-between justify-around overflow-auto">
           <div>
                  <Navbar/>
                </div>
            
                <div>
                  {
                    songData.map((it)=>{
                      return <Singlesong key={it.track} info={it}/>
                    })
                  }
                </div>

                <div className='text-white font-semibold ml-3 mt-3 text-lg '> My Playlists</div>
                <div className="py-5 grid gap-5 h-8 w-auto grid-cols-5"> 
                 {myplaylist.map((item)=>{
                  return(
                    <Card
                    key={JSON.stringify(item)}
                    title={item.name}
                    description=""
                    imgUrl={item.thumbnail}
                    />
                  )
                 })}
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

const Card = ({title, description,imgUrl}) =>{
  return (
    <div className="bg-black bg-opacity-50 w-full p-4 rounded-lg ml-2 mt-3">
      <div className=" w-auto h-8 pb-2">
      <img className="w-full rounded-md"
      src={imgUrl}
      alt="label img"/>
      </div>
      <div className="text-white font-semibold">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  )
}
