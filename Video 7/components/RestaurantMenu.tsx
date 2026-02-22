import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

//! GOAL: to load the fetched data to the UI => State Variable used.
const RestaurantMenu=() => {

  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId)
  

  if (resInfo===null) {
    return <Shimmer />};

  const restaurantInfo= (resInfo as any)?.cards
                        ?.map((c:any)=>c?.card?.card?.info)
                        ?.find((info:any) => info?.name);

  const {name,cuisines,costForTwoMessage} = restaurantInfo || {}

  const regularCards= (resInfo as any)?.cards
                     ?.find((c:any)=> c?.groupedCard)
                     ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuItems= regularCards
                   ?.filter((c:any)=> c?.card?.card?.itemCards)   
                   ?.flatMap((c:any) => c.card.card.itemCards); 
  
                   

  return (
    <div className="menu ">
      <h1>{name}</h1>
      <p> {cuisines?.join(" ")}, {costForTwoMessage}</p>
  
      <ul>
        {menuItems?.map((item:any, index:number) =>
        <li key={index}>
          {item.card.info.name} - ₹{(item.card.info.price|| item.card.info.defaultPrice)/100}
          </li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu; 