import { CDN_URL } from "../utils/constants";


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





const RestaurantCard = (props: RestaurantCardProps) =>{               
   {/* (or) const RestaurantCard = ({resName,cuisine}) */}
const {resData} =  props

const{name, 
      cuisines,
      cloudinaryImageId, 
      costForTwo,
      avgRating, 
      sla:{deliveryTime}}=resData?.info

return(
    <div className="m-3 p-4 w-[250px] h-full bg-green-100 shadow-md shadow-gray-700 rounded-md border-2 border-green-900 hover:bg-gray-300">
      <img 
      className="rounded-md h-56 w-full"
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



/* 
! Higher Order Component
! i/p = restaurantCard; o/p = restaurantcard with label promoted
.
. 
. 
*/

export const withPromotedLabel = (RestaurantCard: React.ComponentType<RestaurantCardProps>) =>{
  return (props: RestaurantCardProps) => {
    return(
      <div>
        <label> Promoted label </label>
        <RestaurantCard {...props}/>
      </div>

    )
  }

}

export default RestaurantCard;