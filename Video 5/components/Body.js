import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react"; 


const Body= () =>{
/*
! local STATE Variable: Super Powerful Varaible(using HOOKS)
! (more in README.md)
*/
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj)
/*
! this too shall work: array destructuring 
* const arr = useState(resObj);
* const [listOfRestaurants, setListOfRestaurants] = arr;
*/

  return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
             //! filter logic 
             const filteredList = listOfRestaurants.filter(
               (res) => res.info.avgRating>4); 
              setListOfRestaurants(filteredList)
           }}>
            Top Rated Restaurants
          </button>
        </div>

        <div className="res-container">
           {
            listOfRestaurants.map((restaurant) =>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))
           }
           {/* whenever you are looping, give each element a unique key. why? */}
             
        </div>
     </div>
  )
}



export default Body;