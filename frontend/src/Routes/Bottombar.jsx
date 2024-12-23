import {useState,React, useLayoutEffect, useRef} from 'react'
import la from "./la.jpeg";
import playpause from "./playpause.png";
import ra from "./ra.png";
import {Howl,Howler}from 'howler';
import playlist from "./playlist.jpeg";
import { useContext } from 'react';
import Songcontext from '../context/Songcontext';
import addplaylist from "./addplaylist.png";
import heart from "./heart.png";
import Addtoplaylist from './Addtoplaylist';
import { useNavigate } from 'react-router-dom';

export default function Bottombar() {
  const navigate=useNavigate();

   
    const {currentSong,setCurrentSong,soundplay,setsoundplay,ispaused,setispaused}= useContext(Songcontext)
    // console.log(currentSong)
    const firstUpdate=useRef(true);
    useLayoutEffect(()=>{
      if(firstUpdate.current){
        firstUpdate.current=false;
        return;
      }


       if(!currentSong){
       return;
       }

       changeSound(currentSong.track)
    },[currentSong && currentSong.track])

    // const addsongToPlaylist=(playListId)=>{
    //   const songId= currentSong.id
    //   const payload={playListId, songId}
    //   console.log(payload)
    // }
    const playSound =()=>{
      if(!soundplay){
        return;
      }soundplay.play();
    }

    
    const changeSound=(songsrc)=>{
      if(soundplay){
        soundplay.stop()
      }
      let sound= new Howl({
        src:[songsrc],
        html5:true
      });
      setsoundplay(sound);
      sound.play();
      setispaused(false);
    }



    const pauseSong=()=>{
      soundplay.pause();
    }

    const toggle=()=>{
        if(ispaused){
          playSound();
        // setisplaying(true)
        setispaused(false)
    
        }
        else{
          pauseSong();
          setispaused(true)
        }
        
      }
    
  return (
    <>
         <div className="w-1/4 items-center flex">
                <img className="h-16 w-18  pl-5 pr-3"src= {currentSong.thumbnail}/>
                <div className="text-white cursor-pointer font-semibold hover:underline">
                  {currentSong.name}
                </div>
                </div>
                <div className="w-2/3  justify-center flex mt-3">
                      <img className="h-7 w-13 mt-2 pl-5 pr-3" src={la}/>
                      <img className="h-12 w-20  pl-6 pr-3" onClick={toggle}src={playpause}/>
                      <img className="h-7 w-13  mt-2 pl-5 pr-3" src={ra}/>
                </div>
                <div className="w-1/5 ml-8 flex ">
                  <img className='h-7 w-7 ml-5 justify-center mt-5 'onClick={()=>{
                    navigate ("/addtoplaylist")
                  }}src={addplaylist}/>
                  <img className='h-5 w-5 ml-5 justify-center mt-5' src={heart}/>
                </div>
      
    </>
  )
}
