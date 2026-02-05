import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";


const Body= () =>{
  return(
      <div className="body">
        <div className="search">Search</div>

        <div className="res-container">
           {
            resObj.map((restaurant) =>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))
           }
           {/* whenever you are looping, give each element a unique key. why? */}
             
        </div>

     </div>
  )
}


export default Body;