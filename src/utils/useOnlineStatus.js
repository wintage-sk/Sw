
import  {useEffect, useState } from 'react'


const useOnlineStatus = () => {
  const[onlineStatus,setOnlineStatus]= useState(true);
  const handleOnline = () => {
    setOnlineStatus(true);
  }

  const handleOffline = () => {
    setOnlineStatus(false);
  }
  
  useEffect(()=>{
    window.addEventListener("offline", handleOffline);
    window.addEventListener("onLine", handleOnline);
},[]);
  return onlineStatus;
}

export default useOnlineStatus;