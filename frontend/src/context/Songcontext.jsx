import {createContext} from "react";
const Songcontext = createContext({
    currentSong:null,
    setCurrentSong:(currentSong)=>{},
    soundplay : null,
    setsoundplay: ()=>{},
    ispaused :null,
     setispaused : ()=>{}
});
export default Songcontext;