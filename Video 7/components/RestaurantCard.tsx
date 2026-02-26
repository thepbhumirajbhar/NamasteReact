import { CDN_URL } from "../utils/constants"


const styling= {
  backgroundColor:"rgb(243 217 217)"
}

type RestaurantCardProps={
    resData:{
      info:{
        id: string;
        name: string;
        cuisines: string[];
        avgRating: number;
        cloudinaryImageId: string;
        costForTwo: string;
        sla:{
          deliveryTime: number;
        }
      }
    }
}



const RestaurantCard= (props: RestaurantCardProps) =>{                {/* (or) const RestaurantCard = ({resName,cuisine}) */}
const {resData} =  props
const{name, cuisines,cloudinaryImageId, costForTwo,avgRating, sla:{deliveryTime}}=resData?.info

return(
    <div className="m-3 p-4 w-[250px] h-full shadow-md shadow-gray-700 rounded-md hover:bg-green-900" style={styling}>
      <img 
      className="rounded-md"
      alt="res-logo" 
      src={ CDN_URL + resData.info.cloudinaryImageId }/>
      <h3 className="font-bold underline text-lg text-green-950 py-3">{name}</h3>                                     {/* (or) <h3> {res.Name} </h3> */}
      <h5 className="text-amber-950 font-medium">{cuisines.join(", ")}</h5>                                 
      <h5 className="text-amber-950 font-medium">{avgRating}</h5>
      <h5 className="text-amber-950 font-medium">{costForTwo }</h5>
      <h5 className="text-amber-950 font-medium">{deliveryTime} minutes </h5>
    </div>
  )
}


export default RestaurantCard;