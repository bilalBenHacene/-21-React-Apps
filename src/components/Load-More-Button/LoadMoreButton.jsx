import React, { useEffect, useState } from 'react'
import './LoadMoreButton.css'
import Product from './product';
const LoadMoreButton = () => {

  const [loading, setLoading]=useState(false);
  const [products,setProducts]=useState([]);
  const [error,setError]=useState('');
  const [count,setCount]=useState(0);
  const [disabledButton,setDisabledButton]=useState(false);

  
  const fetchProducts=async()=>{
    try {
      setLoading(true);

      const response=await fetch(`https://dummyjson.com/products/?limit=10&skip=${count == 0? 0 :count* 10}`);
      const data =await response.json();
      setProducts((prevData)=> [...prevData,...data.products]);
      setLoading(false);
      
    } catch (error) {
      setError(error.message);
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchProducts();
  },[count]);

  useEffect(()=>{
    if(products && products.length == 100) setDisabledButton(true);
  },[products]);
  if(error) return <p>{error}</p>
  if(loading) return <p>{"Loading Data ..."}</p>
  return (
    <div className='load-more-button'>
      <h1 className="font-bold text-xl text-center">Load More Button</h1>
      <section className='products-container'>
        {
          (products && products.length !==0)? 
          products.map((prod,index)=> <Product key={index} prod={prod} />
          )
          :null
        }
      </section>
      <button className='button' disabled={(disabledButton)? 'disabled':null} onClick={()=>setCount(count+1)}>
        { (disabledButton)? '100 Products':'Load More Projects'}
        </button>
    </div>
  )
}

export default LoadMoreButton