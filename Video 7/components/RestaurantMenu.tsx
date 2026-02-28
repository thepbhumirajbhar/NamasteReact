import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

//! GOAL: to load the fetched data to the UI => State Variable used.
const RestaurantMenu=() => {

  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId)
  
  //console.log("🚨🚨 MENU PAGE KA DATA YAHAN HAI: ", resInfo);

  if (resInfo===null) {
    return <Shimmer />};


  const restaurantInfo= (resInfo as any)?.cards
                        ?.map((c:any)=>c?.card?.card?.info)
                        ?.find((info:any) => info?.name);
  //console.log("1. Restaurant Info Data: ", restaurantInfo);
  
  const {name,cuisines,costForTwo} = restaurantInfo|| {}

  const regularCards= (resInfo as any)?.cards
                     ?.find((c:any)=> c?.groupedCard)
                     ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuItems= regularCards
                   ?.filter((c:any)=> c?.card?.card?.itemCards)   
                   ?.flatMap((c:any) => c.card.card.itemCards); 
  //console.log("2. Menu Items List: ", menuItems);

  //console.log("3. Regular cards: ", regularCards)


                   
  //Adding categories in the menu page
  const categories = regularCards
                    .filter((c:any)=> c?.card?.card?.["@type"]===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
  //console.log("Categories: ", categories)
  

  return (
    <div className="text-center">
      <h1 className="font-bold my-7 text-2xl">{name}</h1>
      <p className="font-bold"> 
        {"Cuisines: " + cuisines?.join(", ")}, {costForTwo/100 + " for Two"}
      </p>
    
    {/* Categories Accordian */}
    {categories.map((category:any)=>
      <RestaurantCategory 
        key={category?.card?.card?.categoryID}
        data= {category?.card?.card}/>
      )}

  

    </div>
  )
}

export default RestaurantMenu; 