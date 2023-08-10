import React, { Component } from "react"

import UserClass from "./UserClass";
class About extends Component  { 
  constructor(){
    super();
    // console.log("Parent Constructor")

}
componentDidMount(){
    // console.log("Parent DidMount")

}
render(){
    // console.log("Parent Render")
return (
        <div>
            <h1> About Us</h1>
            <h2>This is one of the best food app in the world</h2>
            <UserClass name={"first"} location={"Coimbatore"} />
            <UserClass name={"second"} location={"pollachi"} />
            <UserClass name={"third"} location={"Tamilnadu"} />
        </div>


    );}

};
export default About;