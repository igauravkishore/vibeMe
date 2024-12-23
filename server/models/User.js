const mongoose=  require ("mongoose");
 const User=  new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
        private: true,
    },
    lastName:{
        type:String,
        required:true,
    
    },
    email:{
        type: String,
        
    },
    username:{
        type: String,
        required: true,
    },
    LikedSongs:[{
        type:String,
        default:"",
    },
],
    PlayLists:[{
        type: String,
        default:"",
    },
],
    Sbstatus:{
        type:String,
        default:"",
    }
 })
 const UserModel= mongoose.model("User",User);
 module.exports=UserModel;