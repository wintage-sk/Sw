import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import RestaurentCard, { withPromoted } from "./RestaurentCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { CARD_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./userContext";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  PromotedRestaurant = withPromoted(RestaurentCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(CARD_URL);
    const json = await data.json();
    console.log(json)
    setListOfRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus){
    return (
      <h1  className="font-bold bg-gray text-red-500 text-3xl text-center">
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );}
  return listOfRest&&listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterRestaurants = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterRestaurant(filterRestaurants);
              console.log(list)
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterTop = listOfRest.filter(
                (top) => top.info.avgRating > 4.1
              );
              setFilterRestaurant(filterTop);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label className="p-2">UserName : </label>
          <input
            className="border border-black p"
            value={loggedInUser}
             onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterRestaurant.map((resl) => (
          <Link key={resl?.info.id} to={"/restaurant/" + resl?.info.id}>
            {resl?.info?.isOpen ? (
              <PromotedRestaurant restData={resl?.info} />
            ) : (
              <RestaurentCard restData={resl?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
