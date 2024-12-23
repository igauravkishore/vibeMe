
import iconn from "./n.jpeg";
// import IconText from "../components/IconText";
import home from "./ho.jpg";
import search from "./search.png";
import lib from "./lib.jpeg";
import React from "react";
import playlist from "./playlist.jpeg";
import like from "./like.svg";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
const Home = ()=>{
  let mystyle={
    backgroundColor:"red"
  }
  const FocusCard= [
    {title:"peace",
    description:"relax with me baby",
    imgurl:"https://th.bing.com/th/id/R.c7251c1fc5029e5e43b256df66918d82?rik=2Z5863efmqVYkA&riu=http%3a%2f%2fwallpapers13.com%2fwp-content%2fuploads%2f2016%2f04%2fSunset-romantic-couple-in-an-embrace-love-Wallpaper-HD.jpg&ehk=9VesCl54LWbKdsSZzWTXdQux%2fYAP%2fr0lLpmZlAIGuMY%3d&risl=&pid=ImgRaw&r=0"
  },

  {title:"soft",
    description:"by hugging and eye contacts",
    imgurl:"https://th.bing.com/th/id/OIP.Qkzg-O63WBzHdawMgYEWfgHaFj?rs=1&pid=ImgDetMain"
  },

  {title:"hard",
    description:"by kissing and hand movement",
    imgurl:"https://th.bing.com/th/id/OIP.ijc3wQApoBOdGXDphFE8wAHaE8?rs=1&pid=ImgDetMain"
  },

  {title:"study",
    description:"daat k or thappad maar k",
    imgurl:"https://th.bing.com/th/id/OIP.EzaQRQNkCV2a6p8SkR1NYQHaEK?rs=1&pid=ImgDetMain"
  },

  {title:"love",
    description:"caring ,loving and respect",
    imgurl:"https://th.bing.com/th?id=OIP.NFnY5SpkkvqvAjXlWJ6IQwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
];
    return(
        <div className="h-full w-full flex">
            <div className="h-full w-1/5 bg-black flex item-center justify-start cursor-pointer ">
                <Sidebar/>
            </div>



               <div className="h-full w-4/5 bg-app-black justify-end justify-around overflow-auto">
                <div className="navbar  w-full h-1/10 bg-black opacity-30 justify-end">
                
              
                <Navbar/>
                    
                </div>
                <div className="content P-10 overflow-auto">
                <PlaylistView titleText="Focus" cardsData={FocusCard}/>
                <PlaylistView  titleText="Focus" cardsData={FocusCard}/>
                <PlaylistView titleText="Focus" cardsData={FocusCard}/>
                
                
                </div>

               
              
               </div>
              

           
        </div>
    );
};

const PlaylistView=({titleText,cardsData}) =>{
  return <div className="text-white">
    
    <div className="text-2xl font-semibold">{titleText}</div>
    <div className="w-full  flex justify-between space-x-3">
      {
        cardsData.map((item)=>{
          return <Card title={item.title} description={item.description} imgurl={item.imgurl}/>
        })
      }
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
    </div>
    </div>
    
};

const Card = ({title, description,imgUrl}) =>{
  return (
    <div className="bg-black bg-opacity-50 w-1/6 p-4 rounded-lg ml-2 mt-3">
      <div className="py-4">
      <img className="w-full rounded-md"
      src={imgUrl}
      alt="label img"/>
      </div>
      <div className="text-white font-semibold">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  )
}
export default Home;