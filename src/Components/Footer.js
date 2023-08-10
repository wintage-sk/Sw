import React from 'react'

const Footer = () => {
  return (
    <div className="flex mob:flex-col justify-around w-full shadow h-14 bg-red-500 text-white text-center leading-[3.5rem] bottom-0 fixed z-40">
      <span className="text-left mob:text-xs mob:text-center">Hey  ....  Thanks for using our  Good Food <span className="text-blue">&#x2764;</span> </span>
      <span className="text-center mob:text-xs">Developed with <span className="text-red">&#x2764;</span> by Satheesh</span>
    </div>
  )
}

export default Footer