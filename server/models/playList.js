const mongoose= require("mongoose");
const playlist = new mongoose.Schema({
name:{

    type: String,
    required: true,
},
thumbnail:{

    type: String,
    required: true,

},
owner:{

    type: mongoose.Types.ObjectId,
    ref: "User",

},
songs:[{
    type: mongoose.Types.ObjectId,
    ref:"Song",

},
],
collaborators:[{
    type: mongoose.Types.ObjectId,
    ref:"User",

}]

})

const Playlistmodel = mongoose.model("playlist", playlist);
module.exports=Playlistmodel;