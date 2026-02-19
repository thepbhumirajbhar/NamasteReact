import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants";


const useRestaurantMenu = (resId?: string) =>{

  const [resInfo, setResInfo] = useState(null)

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () =>{
      const data = await fetch(MENU_API + resId)
      const json = data.json();
      setResInfo(json);
  }
  return resInfo;
};


export default useRestaurantMenu;