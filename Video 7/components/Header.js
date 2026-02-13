import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

// ! GOAL: to link the pages with the names in the header.
import { Link } from "react-router-dom";
//! Link(Component) is similar to href but better: it doesnot load the entire page ==> better UX


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
          <li>
            <Link to="/"> Home </Link> 
          </li>
          <li>
            <Link to="/about"> About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
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