import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import useMobileSize from '../../hooks/useMobileSize';
import { toggleSideBar } from '../../redux/slice/sideToggle-slice';

const SideBar = () => {
  const mobileSize = useMobileSize();
  const id = useSelector((state) => state.sideBarActive.id)
  // console.log(id)
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.items.notes);
  const navigate = useNavigate();
  const toggle = useSelector((state) => state.sideToggle);

  return (
    <div
      className={`w-64 h-full border-r dark:border-r-gray-700 z-50 bg-white dark:bg-black border-b-gray-50 box-border overflow-auto ${
        !toggle && 'hidden'
      } ${mobileSize && 'fixed w-full border-none'}`}
    >
      {notes.length ? (
        notes.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/notes/${item.id}`);
              mobileSize && dispatch(toggleSideBar());
            }}
            className={`w-full dark:text-white bg-gray-200 hover:bg-gray-300 dark:bg-black dark:hover:bg-gray-800 hover:cursor-pointer ${
              item.id == id ? 'dark:bg-gray-800 bg-gray-200' : ''
            }`}
          >
            <h2 className="p-2 py-3">{item.content.slice(0, 20) + '...'}</h2>
            <hr className="border-gray-200 dark:border-gray-700" />
          </div>
        ))
      ) : (
        <h1 className="dark:text-white text-center">Empty list</h1>
      )}
    </div>
  );
};

export default SideBar;
