import React, { useEffect, useState } from 'react'
import './ScrollIndicator.css'
const ScrollIndicator = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const [scrollPercentage,setScrollPercentage]=useState(0);
    const handleScroll=()=>{
        const scrolled= document.body.scrollTop || document.documentElement.scrollTop;
        const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((scrolled / height) * 100);
    }
    const fetchData=async ()=>{
        try {
            setIsLoading(true);
            const response=await fetch('https://dummyjson.com/products?limit=100');
            const result=await response.json();
            setData([...result.products]);
            
            
        } catch (error) {
            setError(error.message);
        }finally{setIsLoading(false);}
    }
    useEffect(()=>{
        fetchData();
    },[]);
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=> {window.removeEventListener('scroll',()=>{})};
    },[scrollPercentage]);
    if(isLoading) return <p className='text-center'>{'Loading Data ...'}</p>
    if(error) return <p className='text-center'>{error}</p>
  return (
    <div className='scroll-indicator'>
        <section className='fixed'>
            <span className='block bg-blue-600 h-3 rounded-full' 
            style={{width:`${scrollPercentage}%`}}></span>
        </section>
        <h1 className='title'>Scroll Indicator</h1>
        {
            data && data.length !==0 ? 
            data.map((prod,index)=><div className='text-center' key={index}>{ prod.title}</div>
            ):null
        }
    </div>
  )
}

export default ScrollIndicator