import React, { useState } from 'react'

const TabItem = ({ tabContent, OnChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick=(getIndex)=>{
        setCurrentIndex(getIndex -1 );
        OnChange(getIndex-1)
    }
    return (
        <div className='wrapper'>
            <header>
                {
                    tabContent.map(item => (
                        <div 
                        className={((currentIndex+1) == item.id)? 'selected':''}
                        key={item.id}  
                        onClick={()=>handleClick(item.id)}>{item.label}</div>
                    ))
                }
            </header>
            <article>
                {
                    tabContent[currentIndex] && tabContent[currentIndex].content
                }
            </article>
        </div>
    )
}

export default TabItem