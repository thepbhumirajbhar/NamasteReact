import { useEffect } from "react";

const RestaurantMenu=() => {
  
  useEffect(()=>{
    fetchMenu()
  },[]);

  const fetchMenu = async ()=>{
    const data = await fetch(
        "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=766502");

    const json = await data.json();
    console.log(json)
  };


  return (
    <div className="menu ">
      <h1>Name of the Restaurant</h1>
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