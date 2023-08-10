import React,{useState} from 'react'
import ListItem from './ListItem'
const RestaurantCategory = ({data, showItems, setShowIndex}) => {
 
  const[isVisible,setIsVisible]=useState(false);
    const handleClick=()=>{
        setShowIndex()
        setIsVisible(!isVisible)

    }
   
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer" onClick={handleClick}>
       <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
    </div>
    {isVisible&&showItems && <ListItem items={data?.itemCards}/>}
    
    </div>
  )
}

export default RestaurantCategory