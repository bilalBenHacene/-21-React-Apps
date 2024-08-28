import React from 'react'
import './Tabs.css'
import TabItem from './TabItem'

const Tabs = () => {
    const tabs=[
        {
            id:1,
            label:"Tab 1",
            content:" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id:2,
            label:"Tab 2",
            content:"Placeat, unde! Non omnis at quidem blanditiis possimus voluptate dolores optio commodi libero aliquid excepturi."
        },
        {
            id:3,
            label:"Tab 3",
            content:"Deleniti laboriosam a. Minus distinctio perferendis cum?"
        },
    ];
    const handleIndex=(currentIndex)=>{
        console.log(currentIndex);
    }
  return (
    <div className='tabs'>
        <h1 className='title'>Tabs</h1>
        <TabItem tabContent={tabs} OnChange={handleIndex}/>

    </div>
  )
}

export default Tabs