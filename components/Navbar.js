import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";


const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="logo mx-5">
        <Link href={'/'}><Image width={200} height={40} src="/logo.png" alt="" /></Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-6 font-bold md:text-md'>
          <Link href={'/kids'}><li className='hover:text-green-600'>Kids</li></Link>
          <Link href={'/women'}><li className='hover:text-green-600'>Women</li></Link>
          <Link href={'/mens'}><li className='hover:text-green-600'>Men's</li></Link>
          <Link href={'/energyballs'}><li className='hover:text-green-600'>Energy Balls</li></Link>
          <Link href={'/articles'}><li className='hover:text-green-600'>Blogs</li></Link>
        </ul>
      </div>
      <div className="cursor-pointer cart absolute right-0 top-4 mx-5 flex">
        <Link href={'/login'}><MdAccountCircle className='text-xl md:test-2xl mx-2' /></Link>
        <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:test-2xl' />
      </div>

      <div ref={ref} className={`w-72 h-[100vh] z-10 sideCart absolute top-0 right-0 bg-green-100  px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? `translate-x-0` : `translate-x-full`}`}>
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-green-500"><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your cart is empty..!</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">
                <div className='w-2/3 font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant}) </div>
                <div className='flex font-semibold items-center justify-center w-1/3 text-lg'><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-green-500' /> <span className="mx-2 text-sm">{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-green-500' /></div>
              </div>
            </li>
          })}


        </ol>
        <div className="font-bold my-2">Subtotal: {subTotal}</div>
        <div className="flex">

          <Link href={'/checkout'}><button className='flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm'> <BsFillBagCheckFill className='m-1' /> Checkout</button></Link>
          <button onClick={clearCart} className='flex mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm'>  Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar