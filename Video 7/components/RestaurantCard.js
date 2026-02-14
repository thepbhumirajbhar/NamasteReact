import { CDN_URL } from "../utils/constants"


const styling= {
  backgroundColor:"rgb(243 217 217)"
}

const RestaurantCard= (props) =>{                {/* (or) const RestaurantCard = ({resName,cuisine}) */}
const {resData} =  props
const{name, cuisines,cloudinaryImageId, costForTwo,avgRating, sla:{deliveryTime}}=resData?.info

return(
    <div className="res-card" style={styling}>
      <img 
      className="res-logo"
      alt="res-logo" 
      src={ CDN_URL + resData.info.cloudinaryImageId }/>
      <h3>{name}</h3>                                     {/* (or) <h3> {res.Name} </h3> */}
      <h5>{cuisines.join(", ")}</h5>                                 
      <h5>{avgRating}</h5>
      <h5>{costForTwo }</h5>
      <h5>{deliveryTime} minutes </h5>
    </div>
  )
}


export default RestaurantCard;