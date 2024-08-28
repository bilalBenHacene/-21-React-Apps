import React, { useState } from 'react'
import MenuList from './MenuList';

const MenuItem = ({ item }) => {
  const [open,setOpen]=useState(false);
  let children = [];
  if (item.children) children = [...item.children];
  return (
    <div className='menu-item'>
      <section className='header' onClick={()=>setOpen(!open)}>
        {item.label}
        {(item.children ) ? 
        <span className='toggle-button'>
          {
            (open)? '-':'+'
          }
        </span>
          : null}

      </section>
      {
        children && children.length !== 0 ?
          <div className={`children ${(!open)? 'closed':null}`}>
            <MenuList menus={children} />
          </div>
          : null
      }
    </div>
  )
}

export default MenuItem