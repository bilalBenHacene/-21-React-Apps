import React, { useState } from 'react'
import './DarckLightMode.css'
const DarckLightMode = ({toggleDarck ,setToggleDarck}) => {
  
  return (
    <div className='darck-light-mode '>
        <h1 className='title '>Darck Light Mode</h1>
        <section className=''>
        <input type="checkbox" name="" id="" className='toggle-btn'
        defaultValue={toggleDarck}
        onChange={()=>setToggleDarck(!toggleDarck)}
        />

        </section>
    </div>
  )
}

export default DarckLightMode