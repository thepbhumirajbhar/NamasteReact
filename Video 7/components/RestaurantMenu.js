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


  console.log("My Restaurant Data:", resInfo);
  return resInfo===null ? <Shimmer /> 
  :(
    <div className="menu ">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>Menu</h3>
      <ul>
        <li>Biryaani</li>
        <li>Burger</li>
        <li>Butter Chicken</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu; 