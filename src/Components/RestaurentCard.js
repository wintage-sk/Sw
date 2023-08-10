import React from "react";
import  ReactDOM  from "react-dom/client";
import {CDN_URL} from "../utils/constants"



const RestaurentCard = (props) => {
    const { restData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = restData;
    
    return (
       
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
          <img className="rounded-lg"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="logoimage"
        />
        
        <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
    );
  };
  export const withPromoted=(RestaurentCard)=>{
    return (props)=>{
      return(
        <div>
        <label className="absolute bg-black  text-white m-2 p=2">{}</label>
        <RestaurentCard  {...props}/>
        </div>
      )
    }
  };
  
export default RestaurentCard; 