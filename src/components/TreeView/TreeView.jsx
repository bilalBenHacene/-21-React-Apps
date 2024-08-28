import React from 'react'
import "./TreeView.css"
import MenuList from './MenuList'

const TreeView = ({menus={}}) => {
  return (
    <div className='tree-view'>
        <h1 className='title'>Tree View</h1>
        <menu>
          <MenuList menus={menus} />
        </menu>
    </div>
  )
}

export default TreeView