import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import useMobileSize from '../../hooks/useMobileSize';
import { toggleSideBar } from '../../redux/slice/sideToggle-slice';


const SideBar = () => {
  const mobileSize = useMobileSize()
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.items.notes);
  console.log(notes)
  const navigate = useNavigate()
  const toggle = useSelector((state) => state.sideToggle)
  console.log(toggle)
  return (
    <div className={`w-64 h-full border-r dark:border-r-gray-700 z-50 dark:bg-black border-b-gray-50 p-2 box-border overflow-auto ${!toggle && 'hidden'} ${mobileSize && 'fixed w-full border-none'}`}>
      {notes.length ?(
      notes.map(item =>(
        <div 
          key={item.id} 
          onClick={()=>(navigate(`/notes/${item.id}`),dispatch(toggleSideBar()))}
          className="p-2 mb-1 w-full dark:text-white bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 hover:cursor-pointer rounded-md"
        >{item.content.slice(0,20)+"..."}</div>
      ))):<h1 className='dark:text-white text-center'>Empty list</h1>}
    </div>
  )
}

export default SideBar