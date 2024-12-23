
import iconn from "./n.jpeg";
// import IconText from "../components/IconText";
import home from "./ho.jpg";
import { useState } from "react";
import search from "./search.png";
import ImageUpload from "../utils/Imageupload";
import lib from "./lib.jpeg";
import React from "react";
import playlist from "./playlist.jpeg";
import like from "./like.svg";
import {makeAuthPost} from "../utils/ServerHelper"
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
const UploadSong = ()=>{
  const[name,setname]=useState("");
  const[thumb,setthumb]=useState("");
  const[thumbname,setthumbname]=useState();
  const[track,settrack]=useState("");
  const[filename, setfilename]=useState();
  const navigate= useNavigate();
  
  
  const submitsong = async()=>{
    
    console.log(thumb);
   
    const data={name,thumbnail:thumb,track:track};
  
    const response=await makeAuthPost("/song/create",data);
    console.log(response);
    if(response.err){
      alert("could not create song")
      return;
    }
    alert("success");
    navigate("/home");
    
  };
  
    return(
        <div className="h-full w-full flex"> 
            <div className="h-full w-1/5 bg-black flex item-center justify-start cursor-pointer ">
             <Sidebar/>
             
               
              </div>



               <div className="h-full w-4/5 bg-app-black justify-end justify-around overflow-auto">
               
                <div>
                  <Navbar/>
                </div>
                
                <div className="text-gray-400 text-3xl font-semibold hover:text-gray mt-3 my-100  mr-10 ml-6" >Upload Songs</div>
                  
                
                <div className="flex">
                  <div className="w-3/5">
                <div className="text-gray-400  font-semibold hover:text-gray mt-10 my-100 justify-center justify-around mr-10 ml-6"> Song Name</div>
                <input id="songname" onChange={(e)=>{
                  setname(e.target.value)
                }} placeholder=" Write the name of your Song" value={name} required className="block bg-gray-900 w-full ml-6 mt-2 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         
                 />
                 <div className="text-gray-400  font-semibold hover:text-gray mt-6  mb-3 font-sm mr-10 ml-10"> Track</div>
                 <div className=" ml-6">
                  {
                    filename?(
                    <div className="bg-white text-black mt-4 rounded-full p-3 font-semibold">{filename}</div>
                    )
                  :
                  <ImageUpload  setUrl={settrack} setName={setfilename}/>
}
                 </div>

                 </div>
                
               
                <div className="w-4/5">
                  <br/> 
                   <br/>
               <div className="text-gray-400  font-semibold  pt-25 mt-20 mb-3 ml-25 pl-8 "> Thumbnail</div>
               <div className="ml-20">
                   {
                    thumbname?(
                    <div className="bg-white text-black hover:text-black hover:bg-gray-400  rounded-full hover:bg-black hover:text-gray-400 p-3 font-semibold">{thumbname}</div>
                    )
                  :
                  <ImageUpload  setUrl={setthumb} setName={setthumbname}/>
                }
                </div>

                
                 <br/>
                 <br/>
                  <button
                  className=" hover:text-black bg-gray-700 text-gray-300  hover:bg-gray-600 rounded-full p-3 mt-20 mr-10 text-center justify-end hover:text-bold font-semibold"
                  onClick={submitsong}
                  >
                Submit song
                </button>

               
                 </div>
                
                 </div>
                 
                
                
               
               </div>
               
              

           
        </div>

    );
};


      {/* <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={like}/>


      <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={like}/>

      <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={lib}/>

      <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={home}/>

      <Card 
      title="peaceful piano"
      description="relax with me baby"
      imgurl={like}/>
    </div>
    </div>; */}
   
    



export default UploadSong; 