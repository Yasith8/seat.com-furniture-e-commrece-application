import React, { useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../stores/Cart';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../stores/Cart';


function ProductCart({item}) {
  const carts=useSelector(store=>store.cart.items)
  console.log(carts)
  const dispatch=useDispatch()

  const [isFav,setIsFav]=useState(false);
  const [addCart,setAddCart]=useState(false);

  const favBtnHandler=()=>{
    setIsFav(!isFav)
  }

  const cartBtnHandler=()=>{
    setAddCart(!addCart)
    if(!addCart){
      dispatch(addToCart({
        productId:item.id,
        quantity:1
      }))
    }else{
      dispatch(removeFromCart())
    }
  }

  return (
    <div className='bg-white h-[20rem] w-[20rem] flex flex-col items-center rounded-lg'>
        <div className='bg-slate-100 w-[13rem] h-[13rem] flex items-center justify-center rounded-md mt-5'>
        <Link to={item.slug}>
        <img src={item.img} alt={item.slug} className='scale-50 object-cover object-top drop-shadow-[0_50px_30px_#0007]'/>
        </Link>
        </div>
        <h1 className='font-bold text-lg'>{item.name}</h1>
        <div className='flex flex-row items-center justify-between gap-12'>
          <p className='text-sm text-gray-500'>{item.price}</p>
          <div className='bg-slate-200 flex justify-between items-center p-2 w-[10rem] hover:bg-slate-100 rounded-md'>
            <button onClick={cartBtnHandler} className='flex justify-between items-center'>{(addCart)?<BsFillCartCheckFill/>:<BsFillCartPlusFill/>}{(addCart)?<span className='mx-[5px]'>Added to Cart</span>:<span className='mx-[5px]'>Add to Cart</span>}</button>
            <button onClick={favBtnHandler}>{(isFav)?<IoIosHeart className='text-red-500'/>:<IoIosHeartEmpty/>}</button>
          </div>
        </div>
    </div>
  )
}

export default ProductCart