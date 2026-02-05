import React from "react";
import ReactDOM from "react-dom/client"



const Header=() =>{
  return(
    <div className="header">
      <div className="logo-container">
        <img 
        className="logo"
        src="https://img.freepik.com/premium-vector/simple-restaurant-location-logo-vector_177315-743.jpg?semt=ais_hybrid&w=740&q=80"/>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>

      </div>


    </div>
  )
}

const Styling= {
  backgroundColor:"rgb(243 217 217)"
}

const RestaurantCard= (props) =>{                             {/* (or) const RestaurantCard = ({resName,cuisine}) */}
const {resData} =  props
const{name, cuisines,ncloudinaryImageId, costForTwo,avgRating, sla:{deliveryTime}}=resData?.info

return(
    <div className="res-card" style={Styling}>
      <img 
      className="res-logo"
      alt="res-logo" 
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
      resData.info.cloudinaryImageId }/>
      <h3>{name}</h3>                                     {/* (or) <h3> {res.Name} </h3> */}
      <h5>{cuisines.join(", ")}</h5>                                 
      <h5>{avgRating}</h5>
      <h5>{costForTwo }</h5>
      <h5>{deliveryTime} minutes </h5>
    </div>
  )
}


const resObj=[
    {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "1026651",
      "name": "Chinese Wok",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/28/a44aaf25-3312-47f1-b028-6a28e9da5513_1026651.jpg",
      "locality": "Parvat Patiya",
      "areaName": "The Palace, Godadara Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
      "Chinese",
      "Asian",
      "Tibetan",
      "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "61955",
      "avgRatingString": "4.2",
      "totalRatingsString": "618",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-10-25 23:00:00",
        "opened": true
      },
      "isOpen": true,
      "type": "F",
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE"
        }
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/surat/chinese-wok-parvat-patiya-the-palace-godadara-road-rest1026651",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "766502",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/16/57381e18-b9c6-4cf1-a9cb-6bc3bf72ecc9_766502.JPG",
      "locality": "Athwa",
      "areaName": "Athwa",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Bakery",
      "Desserts"
      ],
      "avgRating": 4.7,
      "parentId": "1040",
      "avgRatingString": "4.7",
      "totalRatingsString": "1.3K+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 5.6,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "5.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-10-26 00:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
          {
            "attributes": {
              "description": "Gourmet",
              "imageId": "newg.png"
            }
          }
         ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE"
      }
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.4",
        "ratingCount": "697"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/surat/theobroma-athwa-rest766502",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "72605",
    "name": "Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/3e0611f1-2572-464f-baca-c3dcf3edc750_72605.JPG",
    "locality": "Tribhuvan Complex",
    "areaName": "Athwa",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 4.3,
    "parentId": "721",
    "avgRatingString": "4.3",
    "totalRatingsString": "9.3K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-10-25 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Pizza.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Pizza.png"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹99"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE"
    }
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.2",
    "ratingCount": "4.4K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/surat/pizza-hut-tribhuvan-complex-athwa-rest72605",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1134895",
    "name": "Burger King",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/1/20375e0a-ff7b-4b95-8070-73b3e9df02fa_1134895.jpg",
    "locality": "Pandesara GIDC, Udhna Darwaja",
    "areaName": "Milestone Vibrant, opposite Apple Hospital",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.4,
    "parentId": "166",
    "avgRatingString": "4.4",
    "totalRatingsString": "883",
    "sla": {
    "deliveryTime": 21,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-10-26 04:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹55"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE"
    }
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/surat/burger-king-pandesara-gidc-udhna-darwaja-milestone-vibrant-opposite-apple-hospital-rest1134895",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "675027",
    "name": "Olio - The Wood Fired Pizzeria",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/bf073543-46e7-4002-9af6-1e55a202a1ac_675027.JPG",
    "locality": "Bhatar",
    "areaName": "Jivkor Nagar Co.Op.Hs",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Fast Food",
    "Snacks",
    "Beverages",
    "Desserts"
    ],
    "avgRating": 4.1,
    "parentId": "11633",
    "avgRatingString": "4.1",
    "totalRatingsString": "4.0K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 4.7,
    "serviceability": "SERVICEABLE",
    "slaString": "30-40 mins",
    "lastMileTravelString": "4.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-10-26 05:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹119"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE"
    }
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/surat/olio-the-wood-fired-pizzeria-bhatar-jivkor-nagar-co-op-hs-rest675027",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "424877",
    "name": "Dilliwale Pahelvanjee'S Cholle Bhature",
    "cloudinaryImageId": "tajbfx84hahoum5w9niz",
    "locality": "Moti Begumwadi",
    "areaName": "New Textile Market",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Punjabi",
    "Street Food",
    "Fast Food"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "289667",
    "avgRatingString": "4.7",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-10-25 18:15:00",
    "opened": true
    },
    "isOpen": true,
    "type": "F",
    "aggregatedDiscountInfoV3": {
    "header": "₹50 OFF",
    "subHeader": "ABOVE ₹499",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE"
    }
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/surat/dilliwale-pahelvanjees-cholle-bhature-moti-begumwadi-new-textile-market-rest424877",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "205488",
    "name": "Jay Jalaram Thali",
    "cloudinaryImageId": "56d5abe62452d827b7480c4f5515460a",
    "locality": "Gopipura",
    "areaName": "Gopipura",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Thalis",
    "Gujarati",
    "Punjabi",
    "Chinese",
    "Biryani"
    ],
    "avgRating": 4,
    "parentId": "110113",
    "avgRatingString": "4.0",
    "totalRatingsString": "25K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 3.6,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-10-25 16:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    "description": "OnlyOnSwiggy"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "OnlyOnSwiggy",
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹19"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE"
    }
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/surat/jay-jalaram-thali-gopipura-rest205488",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "257785",
    "name": "Sizzling Culture",
    "cloudinaryImageId": "aihw7cifyarkp9e9uo5g",
    "locality": "LP Savani Road",
    "areaName": "Adajan",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Chinese",
    "Fast Food",
    "Street Food",
    "Beverages"
    ],
    "avgRating": 4.1,
    "veg": true,
    "parentId": "189103",
    "avgRatingString": "4.1",
    "totalRatingsString": "1.2K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 6.6,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "6.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-10-26 03:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹69"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE"
    }
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-43bca6b8-5039-46da-935e-cdde9f114a4e"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/surat/sizzling-culture-lp-savani-road-adajan-rest257785",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]



const Body= () =>{
  return(
      <div className="body">
        <div className="search">Search</div>

        <div className="res-container">
           <RestaurantCard resData={resObj[0]}/>                  {/* resObj is the js object and resData is the key that goes as prop in component*/}
           <RestaurantCard resData={resObj[1]}/>
           <RestaurantCard resData={resObj[2]}/> 
           <RestaurantCard resData={resObj[3]}/> 
           <RestaurantCard resData={resObj[4]}/> 
           <RestaurantCard resData={resObj[5]}/> 
           <RestaurantCard resData={resObj[6]}/> 
           <RestaurantCard resData={resObj[7]}/> 
             
        </div>

     </div>
  )
}



const AppLayout= () => {
  return (
    <div className="app">
      <Header/>
      <Body />

    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)