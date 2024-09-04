import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import CartTab from './CartTab'
import products from '../products'
import ProductCart from './ProductCart'

function Layout() {
  return (
    <div className='bg-slate-400'>
      <main>
        <Header />
        <Outlet/>
        <div>
        <h1 className='pb-4 font-bold ml-4 text-[2rem]'>Product List</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-6 gap-5'>
          {products.map((item,index)=>(
            <ProductCart  key={index} item={item} />

          ))}
        </div>
      </div>
      </main>
      <CartTab/>
      </div>
  )
}

export default Layout