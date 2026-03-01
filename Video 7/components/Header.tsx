import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";

// ! GOAL: to link the pages with the names in the header.
import { Link } from "react-router-dom";
//! Link(Component) is similar to href but better: it doesnot load the entire page ==> better UX

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";





const Header = () =>{

  const [btnNameReact, setBtnNameReact]=useState("LOG IN")
  
  const onlineStatus= useOnlineStatus();

  const data= useContext(UserContext);
  //console.log(data)

  return(
    <div className= "flex justify-between bg-green-950 text-[#F5F5DC] font-bold shadow-gray-700 shadow-lg">
      <div className="logo-container flex items-center px-6 ">
        <img 
        className="w-16 "
        src= {LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex p-1 m-4 font-bold ">
          <li className="p-4" >
             Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li >

          <li className="p-4">
            <Link to="/"> Home </Link> 
          </li>

          <li className="p-4">
            <Link to="/about"> About Us </Link>
          </li>

          <li className="p-4">
            <Link to="/contact">Contact US</Link>
          </li >

          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="p-4">
            Cart
          </li>

          <button 
            className="p-4"
            onClick={() => {
              btnNameReact==="LOG IN" ? setBtnNameReact("LOG OUT") : setBtnNameReact("LOG IN");
            }}> 
            {btnNameReact}
          </button>

          <li className="p-4 font-bold">
            {data.loggedInUser}
          </li>

        </ul>

      </div>


    </div>
  )
}


export default Header;