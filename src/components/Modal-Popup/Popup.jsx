import React from 'react'
import './Modal-Popup.css'
const Popup = ({id,header,body,footer,setShowPopup,showPopup}) => {
  return (
    <div id={id? id:'popup'} className='popup'>
        <div className="popup-content">
            <header className=''>{header? header:'Modal'}</header>
            <main>
                {body? body:'Modal Body'}
                <button className='block bg-red-500 hover:bg-red-400' onClick={()=>setShowPopup(false)}> Close</button>
            </main>
            <footer>
                {footer? footer:'footer'}
            </footer>
        </div>
    </div>
  )
}

export default Popup