import ItemList from "./ItemList";

type CategoryData={
  data: any;
}



const RestaurantCategory= ({data}: CategoryData) =>{
  //console.log("list of each category one by one", data)
  
  return(
    <div>
      {/* ACCORDIAN HEADING */}
      <div className="w-6/12 mx-auto my-4 p-3 bg-gray-300 shadow-md shadow-gray-600">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span> ↓ </span>
        </div>
      
      {/* ACCORDIAN BODY */}
      <ItemList items = {data.itemCards} />
    </div>
  </div>  
  )
}

export default RestaurantCategory;