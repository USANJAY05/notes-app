import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import profile from '../../assets/contact.png'
import { PiNotePencilThin } from "react-icons/pi";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { toggleFalse, toggleSideBar, toggleTrue } from '../../redux/slice/sideToggle-slice';
import useMobileSize from '../../hooks/useMobileSize';

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const mobileSize = useMobileSize()
  return (
    <nav className='p-2 border-b dark:border-b-gray-700 bg-white dark:bg-black dark:text-white'>
      <ul className='flex justify-between'>
        <li className='flex gap-1 items-center hover:bg-gray-200 dark:hover:bg-gray-700 w-10 h-10 justify-center rounded-full'><SlArrowLeft onClick={() => (dispatch(toggleTrue()),navigate('/'))} /></li>
        <li className='text-xl font-bold'>Notes App</li>
        <li className='flex gap-2 items-center'>
          <div className='p-2 hover:dark:bg-gray-700 hover:bg-gray-200 rounded-full'>
            <PiNotePencilThin onClick={() => (mobileSize&&dispatch(toggleFalse()),navigate('/'))} className='w-6 h-6' />
          </div>
          <img width={30} height={30} src={profile} alt="" />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar