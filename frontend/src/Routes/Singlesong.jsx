import React from 'react'
import { url } from '../utils/Cloudinarservice'
import { useContext } from 'react'
import Songcontext from '../context/Songcontext'

export default function Singlesong({info,play}) {
    let mystyle={
        backgroundImage:`url("${info.thumbnail}")`
    }
    const {currentSong,setCurrentSong}= useContext(Songcontext)
    // console.log(a)
  return (
    <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-md mt-3" onClick={()=>{setCurrentSong(info)}}>
      <div className='h-12 w-12 bg-cover bg-center 'style={mystyle}></div>
      <div className='flex  w-full '>
        <div className=' w-5/6'>
        <div className='  pl-4 text-white hover:underline cursor-pointer'>
            {info.name}
        </div>
        <div className='text-xs pl-4 text-gray-400 hover:underline cursor-pointer'>
            song
        </div>
        </div>
        <div className='w-1/6 flex'>
        <div className='text-gray-400 text-xs pt-2'>
            3:12
        </div>
        <div className='text-white ml-4 cursor-pointer'>
            ...
        </div>
        </div>
      </div>
    </div>
  )
}
