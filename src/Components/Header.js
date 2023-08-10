import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "./userContext";
import { useSelector } from "react-redux";

 

const Heading = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
 const{loggedInUser}=useContext(userContext)

 const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between bg-yellow-50 shadow-lg sm:bg-green-50 lg:bg-pink-100 ">
      <div>
        <img className="w-36" src={LOGO_URL} alt="sk logo" />
      </div>

      <div className=" flex items-center">
        <ul className="flex  ">
          <li className="p-4">Online Status: {onlineStatus ? "✅" : "🔴"} </li>
          <li className="p-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="p-4">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="p-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="p-4">
            <Link to={"/cart"}>Cart-{cartItems.length} items</Link>
           
          </li>
          <button
            className="login"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
          <li className="p-4">
            <Link to={"/help"}>Help</Link>
          </li>
           <li className="p-4 ">{loggedInUser}</li> 
        </ul>
      </div>
    </div>
  );
};

export default Heading;
