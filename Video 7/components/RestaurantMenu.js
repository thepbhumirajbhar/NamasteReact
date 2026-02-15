import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//! GOAL: to load the fetched data to the UI => State Variable used.
const RestaurantMenu=() => {
  const[resInfo, setResInfo] = useState(null)
   

  useEffect(()=>{
    fetchMenu()
  },[]);

  const fetchMenu = async ()=>{
    const data = await fetch(
        "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=766502");

    const json = await data.json();
    console.log(json)

    setResInfo(json.data)
  };

  if (resInfo===null) {
    return <Shimmer />};

  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]
  console.log(itemCards)

  return (
    <div className="menu ">
      <h1>{name}</h1>
      <p> {cuisines.join(" ")}, {costForTwoMessage}</p>
      <ul>
        <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
        <li>{itemCards[2]?.card?.info?.name}</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu; 