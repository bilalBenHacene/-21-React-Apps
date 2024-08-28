import React, { useState } from 'react'
import './StarsRating.css'
import { FaStar } from "react-icons/fa";

const StarsRating = ({numStars = 5}) => {

  const [rate,setRate]=useState(0);
  const [hover,setHover]=useState(0);

  const handleClick=(currentIndex)=>{
    setRate(currentIndex);
  }
  const handleMouseEnter=(currentIndex)=>{
    setHover(currentIndex);
  }
  const handleMouseLeave=(currentIndex)=>{
    setHover(0);
  }
  return (
    <div className='stars-rating'>
        <h1 className="font-bold text-xl">Stars Rating</h1>
        <section className='flex'>
          {
            [...Array(numStars)].map((_,index)=>{
              index+=1;
              return <FaStar
                className={(index <= (hover || rate))? 'rate':null }
                key={index}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={40}
              />
            })
          }
        </section>

    </div>
  )
}

export default StarsRating