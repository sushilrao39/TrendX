import React from 'react'
import { NavLink } from 'react-router-dom'  // react-router-dom ka NavLink navigation ke liye use kar rahe ho
import { assets } from '../assets/assets'   // icons ko import kar rahe ho

const Sidebar = () => {
  return (
    // Sidebar ka main wrapper div
    <div className='w-[18%] min-h-screen border-r-2'> 
        {/* Sidebar ke andar ek column layout banaya hai */}
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            {/* 1st NavLink - Add Items */}
            <NavLink 
              to="/add"   // ✅ yaha route dena important hai warna navigate nahi karega
              className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l '
            >
                <img className='w-5 h-5' src={assets.add_icon} alt='' /> 
                <p className='hidden md:block'>Add Items</p> {/* text small screen me hidden hoga */}
            </NavLink>

            {/* 2nd NavLink - List Items */}
            <NavLink 
              to="/list"  // ✅ yaha bhi route dena hai
              className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l '
            >
                <img className='w-5 h-5' src={assets.order_icon} alt='' />
                <p className='hidden md:block'>List Items</p>
            </NavLink>

            {/* 3rd NavLink - Orders */}
            <NavLink 
              to="/orders"  // ✅ aur yaha bhi
              className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l '
            >
                <img className='w-5 h-5' src={assets.order_icon} alt='' />
                <p className='hidden md:block'>Orders</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar
