const express= require("express");
// const passport = require("passport"); 
const router= express.Router();
const jwt = require("jsonwebtoken");
const {authorizationMiddeleware}= require("../middlewares/auth")
const Song= require("../models/Song");
const User= require("../models/User");
const Playlist= require("../models/playList")

router.post("/create",authorizationMiddeleware,async(req,res)=>{
    const curruser= req.user;
        const {name,thumbnail,songs}= req.body;
        if(!name || !thumbnail || !songs){
            return res.status(301).json({Error:"Insufficient details to create Playlist"});
        }
        
        const detail= {name,thumbnail,owner:curruser._id,songs,collaborators:[]};
        const createPlaylist= await Playlist.create(detail);
        return res.status(200).json(createPlaylist);
});

 router.get("/get/playlist/:playlistid",authorizationMiddeleware,async(req,res)=>{
    const playListId= req.params.playlistid;
    const playlist= await Playlist.find({_id:playListId});
    if(!playlist){
        return res.status(301).json({err:"Invalid Id"})
    }
    return res.status(200).json(playlist);
 })
 router.get('/get/artist/:artistid',authorizationMiddeleware,async(req,res)=>{
    const artid= req.params.body;
    const artist= await User.find({_id:artid});
    if(!artist){
        return res.status(301).json({err:"artist not found"})
    }
    const playlists= await Playlist.find({owner:artid});
    return res.status(200).json({data:playlists});
 })


 router.get('/get/me',authorizationMiddeleware,async(req,res)=>{
   const artid= req.user._id;
   const playlists= await Playlist.find({owner:artid}).populate("owner");
   return res.status(200).json({data:playlists});
})

 router.post("/add/song",authorizationMiddeleware,async(req,res)=>{
    const curruser=req.user;

     const{playListId,songId}=req.body;
     const playList= await Playlist.findOne({_id:playListId});
     if(!playList){
        return res.status(304).json({err: "Playlist does not exist"})
     }
     if((playList.owner!=curruser._id)&& !playList.collaborators.includes(curruser._id)){
        return res.status(400).json({err:"Not allowed"});
     }
     const song= await Song.findOne({_id:songId});
     if(!song){
        return res.status(304).json({err: "Song does not exist"})
     }
     playList.songs.push(songId);
     await playList.save();
     return res.status(200).json(playList);

 })


module.exports=router; 