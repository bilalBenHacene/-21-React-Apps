import React from 'react'
import './../headerStyle.css'
import useWindowResize from './useWindowResize'
const UseWindowResizeHookTest = () => {
    const windowSize =useWindowResize();
    const {width,height}=windowSize;
  return (
    <div>
        <h1 className='title'>useWindowResize Hook Test</h1>
        <p>Width is: {width}</p>
        <p>Height is: {height}</p>
    </div>
  )
}

export default UseWindowResizeHookTest