import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; 
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { withPromotedLabel } from "./RestaurantCard";


type Restaurant ={
  info: {
    id: string;
    name: string;
    cuisines: string[];
    avgRating: number;
    cloudinaryImageId: string;
    costForTwo: string;
    sla:{
      deliveryTime: number;
    }
    promoted: boolean;
  }
}





const Body= () =>{
/*
! local STATE Variable: Super Powerful Varaible(using HOOKS)
! (more in README.md)
*/

  const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([])
  const [searchText, setSearchText]= useState("");

  const [filteredRes, setFilteredRes]= useState<Restaurant[]>([]);

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard); 
  

  useEffect(() =>{
       fetchData();
  },[]);

  const fetchData = async() => {
    const data= await fetch("https://corsproxy.io/?url=https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();
    console.log(json)
    
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    //this is done so that main list stays intact. 
    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  //console.log(listOfRestaurants)
  

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false){
    return(
      <h2>Looks like you are not connected to the internet</h2>
    )
  }




  // //* CONDITIONAL RENDERING...
  if(listOfRestaurants.length===0){
    return <Shimmer />
  }


  return(
      <div className="body bg-pink-50">
        <div className="filter flex items-center gap-4 my-3">
          <div className="search m-3 flex gap-2"> 
            <input 
              type="text" 
              className="border-2 border-green-700 border-solid" 
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
              }}/>


            <button 
              className="px-4 h-7 bg-green-100 border-2 border-green-700 rounded-md"
              onClick={() => {
                //filter the restaurant cards and update the UI
                // ! bind whatever the user inputs to a local state variable using useState and putting that in the value attribute of input.
                // ! with any change in the searchbox(while typing), update the searchText with whats been typed, using onChange attribute
                console.log(searchText)

                const filteredRes =  listOfRestaurants.filter(
                  (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )

                setFilteredRes(filteredRes);
              }}
              >
                Search
              </button>
          </div>

         <div className="px-4 h-7 bg-green-100 border-2 border-green-900 rounded-md">
          <button className="filter-btn" 
            onClick={() => {
              //! filter logic 
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating>4.5); 
                setFilteredRes(filteredList)}}>
            Top Rated Restaurants
          </button>
         </div>
          
        </div>

         

        <div className="flex flex-wrap justify-start gap-4">
           { filteredRes.map((restaurant) =>(
              <Link 
              to={"/restaurant/"+ restaurant.info.id}
              key={restaurant.info.id}> 
              {
                restaurant?.info?.promoted ? (<PromotedRestaurantCard resData={restaurant}/> )
                : (<RestaurantCard  resData={restaurant}/>)
              }  
              </Link>
            ))
           }
           {/* whenever you are looping, give each element a unique key. why? */}
             
        </div>
     </div>
  )
}



export default Body;
