import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'

function Details() {
  const {slug}=useParams();
  const [detail,setDetail]=useState([]);
  

  useEffect(()=>{
    const findDetail = products.filter(product => product.slug === slug);
    console.log(findDetail)

    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else{
      //bug create error page
      window.location.href='/errorpage'
    }
  },[slug])

  
  return (
    <div>
      <h2 className='text-3xl text-center'>Product Details</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
        <img src={detail.img} alt="" className='w-full'/>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase'>{detail.name}</h1>
          <p className='font-bold text-3xl'>
            Rs. {detail.price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details