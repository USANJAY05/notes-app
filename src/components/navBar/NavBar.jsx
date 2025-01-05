import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import profile from '../../assets/contact.png'
import { PiNotePencilThin } from "react-icons/pi";

const NavBar = () => {
  return (
    <nav className='p-2 border-b dark:border-b-gray-700 bg-white dark:bg-black dark:text-white'>
      <ul className='flex justify-between'>
        <li className='flex gap-1 items-center'><SlArrowLeft /></li>
        <li className='text-xl font-bold'>Notes App</li>
        <li className='flex gap-2 items-center'>
          <PiNotePencilThin className='w-6 h-6' />
          <img width={30} height={30} src={profile} alt="" />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar