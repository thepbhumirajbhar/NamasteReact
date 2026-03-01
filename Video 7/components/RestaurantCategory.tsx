import { useState } from "react";
import ItemList from "./ItemList";

type CategoryData={
  data: any;
  showItems: boolean;
}


const RestaurantCategory= ({data, showItems}: CategoryData) =>{
  //console.log("list of each category one by one", data)

  // passing the control to parent= RestaurantMenu component
  //const [showItems, setShowItems] = useState(false)

  const handleClick = ()=>{
    
  }


  return(
    <div>
      {/* ACCORDIAN HEADING */}
      <div className="w-6/12 mx-auto my-4 p-3 bg-gray-300 shadow-md shadow-gray-600">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span> ↓ </span>
        </div>
      
      {/* ACCORDIAN BODY */}
      {/* showitem when showitem is TRUE... */}
      { showItems && <ItemList items = {data.itemCards} />}
    </div>
  </div>  
  )
}

export default RestaurantCategory;