import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import { GiShoppingCart } from "react-icons/gi";


function Header() {
  return (
    <div className='flex flex-row justify-between p-5'>
      <div className='text-xl font-bold'>Seat.</div>
      <Link to='/' >Home</Link>
      <div>
      <div className='bg-white p-3 rounded-full'>
        <GiShoppingCart className='scale-150'/>
      </div>
        <div className='relative -top-3/4 left-7 w-5 h-5 text-white text-xs bg-red-700 rounded-full p-2 flex items-center justify-center'>0</div>
      </div>
    </div>
  )
}

export default Header