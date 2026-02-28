import { CDN_URL } from "../utils/constants";

type ItemType={
  items: any[];
}

const ItemList = ({items}:ItemType) =>{
  console.log("each item from ItemList is: ", items)

  return(
    <div>
      {items.map((item:any)=>(
        <div
        key={item.card.info.id}
        className="m-2 border-b-2 border-gray-600 text-left flex justify-between items-center pb-2">
          <div className="w-9/12">
            <div className="py-2">
               <span className="font-semibold">{item.card.info.name}</span>
               <span> - ₹{ item.card.info.price/100 || (item.card.info.defaultPrice/100)}</span>
            </div>

            <p className="p-2 text-sm text-slate-700">{item.card.info.description}</p>

        </div>
          

       
        <div className="w-3/12">
        {/* Ek chota sa check: Agar API mein imageId hai tabhi dikhao, warna khali chhod do */}
            {
              item.card.info.imageId && (
                <img 
                  src={CDN_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-full shadow-md shadow-black h-24 rounded-md"/>)}
        </div>
     </div>
        
      ))}
    </div>

  )
}

export default ItemList;