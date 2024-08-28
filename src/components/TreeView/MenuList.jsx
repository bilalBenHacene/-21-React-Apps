import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({menus}) => {
  return (
    <div className='menu-list'>
        {
            menus && (menus.length !==0) ?
            menus.map((item,index)=> <MenuItem key={index} item={item} />) 
            : null
        }
    </div>
  )
}

export default MenuList