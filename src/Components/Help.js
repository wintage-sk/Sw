import React, { useState,useEffect } from 'react'
import { HELP_URL } from '../utils/constants';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";


const Section = ({id, title, description, isVisible, setIsVisible }) => {
  
    return (
      
      <div className="flex flex-col shadow rounded-md p-2.5 m-2.5">
        <div className="flex justify-between items-center"> 
          <h3 className="font-semibold text-lg text-title">{title}</h3>
          {
          isVisible ? (
          <SlArrowUp onClick={() => setIsVisible(false)} className="cursor-pointer" />
        ) : (
          <SlArrowDown onClick={() => setIsVisible(true)} className="cursor-pointer" />
        )}
        </div>
        {isVisible && <p className="text-bio text-base">{description===null?<a class="_1vMNs" href="mailto:careers@swiggy.in?subject=I want to explore career opportunities with Swiggy">SEND AN EMAIL</a>:description}</p>}
      </div>
    );
  };

const Help = () => {
    const [visibleSection, setVisibleSection] = useState("");
    const [question,setQuestion]=useState([])
    useEffect(()=>fetchData(),[])
    const fetchData=()=>async ()=>
    {
        const data=await fetch(HELP_URL);
        const json=await data.json();
        setQuestion(json?.data?.issues?.data) 
        console.log(json.data)
    }
  return (
    <div className="container">
      <div className="card-container">
      <h1 className="card-container-title pb-5"> FAQ</h1>
    {question.map((question) => {return(
        <Section key={question?.id} id={question?.id} title={question?.title} description={question?.description}
        isVisible={visibleSection === question?.id }
        setIsVisible={(display) => {
          if(display) {
            setVisibleSection(question?.id);
          } else {
            setVisibleSection(" ");
          }
        }
        } />)
    }
    )}
    </div>
  </div>
  )
}

export default Help;