import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () =>{

  const [btnNameReact, setBtnNameReact]=useState("LOG IN")
  

  return(
    <div className="header">
      <div className="logo-container">
        <img 
        className="logo"
        src= {LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button 
            className="login-logout"
            onClick={() => {
              btnNameReact==="LOG IN" ? setBtnNameReact("LOG OUT") : setBtnNameReact("LOG IN");
            }}
          > 
            {btnNameReact}
          </button>
        </ul>

      </div>


    </div>
  )
}


export default Header;