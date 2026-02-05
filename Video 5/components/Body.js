import RestaurantCard from "./RestaurantCard";
//import resObj from "../utils/mockData";



//*normal JS variable 
let listOfRestaurants=[
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "1026651",
      "name": "Chinese Wok",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/28/a44aaf25-3312-47f1-b028-6a28e9da5513_1026651.jpg",
      "costForTwo": "₹250 for two",
      "cuisines": ["Chinese", "Asian", "Tibetan", "Desserts"],
      "avgRating": 4.2,
      "sla": {
        "deliveryTime": 31,
      }
    }
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "1026652",
      "name": "MCD",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/28/a44aaf25-3312-47f1-b028-6a28e9da5513_1026651.jpg",
      "costForTwo": "₹250 for two",
      "cuisines": ["Chinese", "Asian", "Tibetan", "Desserts"],
      "avgRating": 3.6,
      "sla": {
        "deliveryTime": 25,
      }
    }
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "1026653",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/28/a44aaf25-3312-47f1-b028-6a28e9da5513_1026651.jpg",
      "costForTwo": "₹250 for two",
      "cuisines": ["Chinese", "Asian", "Tibetan", "Desserts"],
      "avgRating": 4.8,
      "sla": {
        "deliveryTime": 25,
      }
    }
  }
]


const Body= () =>{
  return(
      <div className="body"> 
        <div className="filter">
          <button className="filter-btn" onClick={() => {
             //! filter logic 
             listOfRestaurants=listOfRestaurants.filter(
               (res) => res.info.avgRating>4);
              console.log(listOfRestaurants)
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