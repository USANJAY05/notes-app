import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'


const SideBar = () => {
    const notes = useSelector((state) => state.items.notes);
    console.log(notes)
  const navigate = useNavigate()

  return (
    <div className='w-64 h-full border-r dark:border-r-gray-700 dark:bg-black border-b-gray-50 p-2 box-border overflow-auto'>
      {notes.map(item =>(
        <div 
          key={item.id} 
          onClick={()=>navigate(`/notes/${item.id}`)}
          className="p-2 mb-1 w-full dark:text-white bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 hover:cursor-pointer rounded-md"
        >{item.content.slice(0,20)+"..."}</div>
      ))}
    </div>
  )
}

export default SideBar