import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Bottombar from './Bottombar'
import { useContext } from 'react'
import Songcontext from '../context/Songcontext'
import searchh from './searchh.png'
import { makeAuthGet } from '../utils/ServerHelper'
import Singlesong from './Singlesong'

export default function Search() {
    const {currentSong,setCurrentSong}= useContext(Songcontext)
    const [searchtext,setsearchtext]= useState("");
    const [songdata,setsongdata]=useState([]);

    const searchSong= async()=>{
      const response= await makeAuthGet("/song/get/songname/"+searchtext);
      console.log(response.data)
      setsongdata(response.data);
      setsearchtext("");
    }

  return (
    <>
        <div className="h-full w-full ">
          <div  className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>
               <div className="h-full w-1/5 bg-black flex item-center justify-start cursor-pointer ">

                    <Sidebar/>
                </div>
           <div className="h-full w-4/5 bg-app-black justify-between justify-around overflow-auto">
             
              <div className='navbar  w-full h-1/10 bg-gray-800  justify-between justify-around flex '>
                
                
                    {/* <div className='ml-8'>
                <img className="mx-auto h-9 w-auto mt-1 ml-18 mt-4 flex bg-white py-2 " src={search}  alt="Your Company"/>
                </div> */}
                  
                  <Navbar/>
               

                
                </div>
                <div className='flex h-1/10 '>
                  <div>
                <img className=" h-6 w-auto bg-gray-500 ml-4 mt-7  " src={searchh}  alt="Your Company"/>
                </div>
                <div className=' w-full pl-4'>
                <input id="search" value={searchtext} onKeyDown={(e)=>{
                  if(e.key==="Enter"){
                    searchSong();
                  }
                   }}placeholder=" Write the name of your Song" onChange={(e)=>{ setsearchtext(e.target.value)}}required className="block w-1/2 mb-3 mt-5 mr-12   rounded-3xl border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset text-center ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                 
                <div>
                  {
                    songdata.map((it)=>{
                      return <Singlesong key={it.track} info={it}/>
                    })
                  }
                </div>
                </div>
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
