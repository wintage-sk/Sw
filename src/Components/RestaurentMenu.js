import React from "react";
import { useParams } from "react-router-dom";
import { useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { AiFillStar } from "react-icons/ai";
import RestaurantCategory from "./RestaurantCategory";
// import { CDN_URL } from "../utils/constants";
// import { MENU_API } from "../utils/constants"

const RestaurentMenu = () => {
 
 
  const { resID } = useParams();
   const resInfo =useRestaurantMenu(resID);
   const [showIndex, setShowIndex] = useState(null);
console.log(resInfo);
//  const { name, cuisines, costForTwoMessage } =
//    resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //   console.log(itemCards)
  // const categories =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.["card"]?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  //   console.log(categories)
  return resInfo &&resInfo.length === 0 ? (
    <Shimmer />
  ) :
   (

    <div className="text-center">
      <div className="flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
          src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId}
          alt={resInfo?.cards[0]?.card?.card?.info?.name}
        />
        <div className="flex flex-col basis-[540px] m-5 ">
          <h2 className="text-3xl max-w-[538px] font-semibold">
            {resInfo?.cards[0]?.card?.card?.info?.name}
          </h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">
            {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="flex items-center px-1 py-0 gap-1">
              <AiFillStar />
              <span>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{resInfo?.cards[0]?.card?.card?.info?.locality
}</div>
            <div>|</div>
            <div>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
    <div >
        {/* <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[0]?.card?.card?.info.name}</h1>
        <p className="font-bold text-lg">
        {resInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")}- { resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </p>  */}
       {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ).map((c,index)=> <RestaurantCategory key={c?.card?.card?.title} data={c?.card?.card} 
    showItems={index === showIndex ? true : false}
    setShowIndex={() => setShowIndex(index)}/>)}  
      
  </div> 
  </div>
  );

 }
export default RestaurentMenu;
