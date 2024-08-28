import React, { useState } from 'react'
import './Modal-Popup.css'
import Popup from './Popup';
const ModalPopup = () => {
    const[showPopup,setShowPopup]=useState(false);
  return (
    <div className='modal-popup'>
        <h1 className='title'>Modal Popup</h1>
        <button onClick={()=>setShowPopup(!showPopup)}>Show Modal</button>
        {
            showPopup && <Popup setShowPopup={setShowPopup} showPopup={showPopup}/>
        }
    </div>
  )
}

export default ModalPopup