import { useState } from "react";
import ItemList from "./ItemList";

type CategoryData={
  data: any;
}


const RestaurantCategory= ({data}: CategoryData) =>{
  //console.log("list of each category one by one", data)

  const [showItems, setShowItems] = useState(false)

  const handleClick = ()=>{
    //write logic here to turn the showItems as TRUE on click(works only once)
    //setShowItems(true)

    //writing logic for toggle feature (works all tym)
    setShowItems(!showItems)
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