import React from "react";
import {useState,useEffect}from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu= (resID) => {

    const [resInfo, setResInfo] = useState(null);
   
    
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resID);
      
    const json = await data.json();
     setResInfo(json.data);
    };
     return resInfo;
    };
 


export default useRestaurantMenu;