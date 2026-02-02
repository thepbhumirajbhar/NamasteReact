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
  backgroundColor:"#bdb9b9"
}

const RestaurantCard= () =>{
  return(
    <div className="res-card" style={Styling}>
      <img 
      className="res-logo"
      alt="res-logo" 
      src="https://www.shutterstock.com/image-photo/traditional-chicken-biryani-served-brass-600nw-2622739739.jpg"/>
      <h3>Meghna Foods</h3>
      <h5>North-Indian</h5>
      <h5>4.4</h5>
      <h5>38 mins</h5>
    </div>
  )
}



const Body= () =>{
  return(
      <div className="body">
        <div className="search">Search</div>

        <div className="res-container">
           <RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard />
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