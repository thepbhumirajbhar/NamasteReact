import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; 
import Shimmer from "./Shimmer";


const Body= () =>{
/*
! local STATE Variable: Super Powerful Varaible(using HOOKS)
! (more in README.md)
*/

  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [searchText, setSearchText]= useState("");

  const [filteredRes, setFilteredRes]= useState([]);


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

  
  // //* CONDITIONAL RENDERING...
  // if(listOfRestaurants.length===0){
  //   return <Shimmer />
  // }


  return listOfRestaurants.length===0 ? <Shimmer /> 
  :(
      <div className="body">
        <div className="filter">
          <div className="search"> 
            <input 
              type="text" 
              className="search-box" 
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
              }}/>
            <button 
              className="search-btn"
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


          <button className="filter-btn" 
            onClick={() => {
              //! filter logic 
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating>4.5); 
                setFilteredRes(filteredList)}}>
            Top Rated Restaurants
          </button>
        </div>

         

        <div className="res-container">
           { filteredRes.map((restaurant) =>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))
           }
           {/* whenever you are looping, give each element a unique key. why? */}
             
        </div>
     </div>
  )
}



export default Body;