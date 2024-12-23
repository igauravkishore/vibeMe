import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate=useNavigate();
    const work =()=>{
      navigate("/uploadSong")
    }
  return (
    <>
       <div className="navbar  w-full h-1/10 bg-gray-800  justify-end pb-1">
                    <div className="w-1/2 flex justify-end justify-around"></div>

                  <div className=" w-4/5 text-white flex">
                  <div className="cursor-pointer ml-60 py-4 hover:text-gray-400"> Premium </div>

                  <div className=" cursor-pointer  ml-10 py-4 hover:text-gray-400"> Support </div>
                  <div className=" cursor-pointer ml-12 py-4 hover:text-gray-400"> Download</div>
                  {/* <div className="  hover:text-red cursor-pointer -10"> loggedin </div> */}
                  
                  <button className="bg-gray-500 text-black h-3/5  px-6 py-2.5 mt-2 flex ml-80 items-center hover:text-black hover:bg-gray-600 justify-center justify-end justify-around rounded-full" onClick={work}>UploadSong</button>
                  
                  </div>
                </div>
    </>
  )
}
