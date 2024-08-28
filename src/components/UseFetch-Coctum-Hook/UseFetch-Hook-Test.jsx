import React from 'react'
import './UseFetch-Costum-Hook.css'
import useFetch from './useFetch'
const UseFetchHookTest = () => {
  const { data, error, pending }=useFetch('https://dummyjson.com/products',{});
  return (
    <div className='useFetch-costum-hook'>
        <h1 className='title'>useFetch Costum Hook Test</h1>
        <section>
          {
            pending? <p>Loading data ,please wait ...</p>:null
          }
          {
            error? <p>{error}</p>:null
          }
          {
            data && data.products && data.products.length ?
            data.products.map(item=> <p key={item.id}>{item.title}</p>)
            :null
          }
        </section>
    </div>
  )
}

export default UseFetchHookTest