import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import profile from '../../assets/contact.png'
import { PiNotePencilThin } from "react-icons/pi";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { toggleFalse, toggleSideBar, toggleTrue } from '../../redux/slice/sideToggle-slice';
import useMobileSize from '../../hooks/useMobileSize';
import { setNote } from '../../redux/slice/note-slice';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mobileSize = useMobileSize();

  return (
    <nav className='p-2 border-b dark:border-b-gray-700 bg-white dark:bg-black dark:text-white'>
      <ul className='flex justify-between'>
        <li onClick={() => {
          dispatch(toggleTrue());
          navigate('/');
          setTimeout(() => {
            dispatch(setNote('')); // Dispatching the setNote action properly
          }, 10);
        }} className='flex items-center justify-center rounded-full hover:text-blue-500 cursor-pointer'>
          <div className='w-6 flex justify-center items-center'>
            <SlArrowLeft />
          </div>
          <h1>Notes</h1>
        </li>
        <li className='flex gap-2 items-center'>
          <div className='p-2 hover:dark:bg-gray-700 hover:bg-gray-200 rounded-full'>
            <PiNotePencilThin 
              onClick={() => {
                if (mobileSize) dispatch(toggleFalse());
                navigate('/');
                setTimeout(() => {
                  dispatch(setNote('')); // Dispatching the setNote action properly
                }, 10);
              }} 
              className='w-6 h-6 hover:cursor-pointer' 
            />
          </div>
          <img className='cursor-pointer' width={30} height={30} src={profile} alt="Profile" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
