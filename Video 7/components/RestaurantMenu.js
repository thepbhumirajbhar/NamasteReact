import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

//! GOAL: to load the fetched data to the UI => State Variable used.
const RestaurantMenu=() => {
  const[resInfo, setResInfo] = useState(null)

  const {resId} = useParams();
  

  useEffect(()=>{
    fetchMenu()
  },[]);

  const fetchMenu = async ()=>{
    const data = await fetch(MENU_API+ resId);
    

    const json = await data.json();

    console.log(json)
    setResInfo(json.data)
    console.log("API URL =>", MENU_API + resId);
  };

  if (resInfo===null) {
    return <Shimmer />};

  const restaurantInfo= resInfo?.cards
                        ?.map((c)=>c?.card?.card?.info)
                        ?.find((info) => info?.name);

  const {name,cuisines,costForTwoMessage} = restaurantInfo || {}

  const regularCards= resInfo?.cards
                     ?.find((c)=> c?.groupedCard)
                     ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuItems= regularCards
                   ?.filter((c)=> c?.card?.card?.itemCards)   
                   ?.flatMap((c) => c.card.card.itemCards); 
  

  
  console.log(menuItems)

  return (
    <div className="menu ">
      <h1>{name}</h1>
      <p> {cuisines?.join(" ")}, {costForTwoMessage}</p>
  
      <ul>
        {menuItems?.map((item, index) =>
        <li key={index}>
          {item.card.info.name} - ₹{(item.card.info.price|| item.card.info.defaultPrice)/100}
          </li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu; 