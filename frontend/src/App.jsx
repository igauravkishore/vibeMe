// import logo from './logo.svg';
import "./output.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Logincomponent from "./Routes/Login";
import Loggedincomponent from './Routes/loggedin'
import Home from "./Routes/home"
import React from "react";
import UploadSong from './Routes/UploadSong'
import Cookies from "js-cookie";
import Mymusic from "./Routes/Mymusic";
import Songcontext from "./context/Songcontext";
import { useState } from "react";
import Search from "./Routes/Search";
import Createplaylist from "./Routes/Createplaylist";


import SignupComponent from "./Routes/signup";
import Library from "./Routes/Library";
import Addtoplaylist from "./Routes/Addtoplaylist";
import SinglePlaylistView from "./Routes/SinglePlaylistView";
// import { imageOptimizer } from "next/dist/server/image-optimizer";
// import {makePost} from "./utils/ServerHelper";

const App = () => {
  const [currentSong, setCurrentSong]=useState(null);
  const[soundplay,setsoundplay]=useState(null);
  const[ispaused, setispaused] =useState(true);
  // const cookies = new Cookies();
  const cookieExists = Cookies.get("token");
  if(cookieExists){
    console.log(cookieExists)

  }
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
      {
        cookieExists?
        (
          <Songcontext.Provider value={{currentSong,setCurrentSong,soundplay,setsoundplay,ispaused,setispaused}}>
            <Routes>
          <Route path= "/home" element={<Loggedincomponent/>} />
          <Route path="/login" element={<Logincomponent />} />
         <Route path="/uploadSong" element={<UploadSong/>}/>
         <Route path="/mymusic" element={<Mymusic/>}/>
         <Route path="/search" element={<Search/>}/>
         <Route path="/playlist" element={<Createplaylist/>}/>
         <Route path="/library" element={<Library/>}/>
         <Route path="/addtoplaylist" element={<Addtoplaylist/>}/>
         <Route path="/playlist/:playlistId" element={<SinglePlaylistView/>}/>
         <Route path= "*" element={<Navigate to="/home"/>} />
        
        </Routes>
        </Songcontext.Provider>)
        :(
        <Routes>
           <Route path="/login" element={<Logincomponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path= "/home" element={<Home/>} />
          
          <Route path= "*" element={<Navigate to="/login"/>} />


        </Routes>
        )
      }
        
      </BrowserRouter>
    </div>
  );
};

export default App;