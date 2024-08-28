import React from 'react'

const Product = ({prod=prod}) => {
  return (
    <div className='product'>
        <img src={prod.thumbnail} alt="" srcset="" />
        <p>{prod.title}</p>
        <p>{`${prod.price}$`}</p>
    </div>
  )
}

export default Product