import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import useMobileSize from '../../hooks/useMobileSize';
import { toggleSideBar } from '../../redux/slice/sideToggle-slice';

const SideBar = () => {
  const mobileSize = useMobileSize();
  const id = useSelector((state) => state.sideBarActive.id);
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.items.notes);
  const navigate = useNavigate();
  const toggle = useSelector((state) => state.sideToggle);
  const opacity = useSelector((state) => state.setOpacity.value)
console.log(opacity,'hhhhh')
  // Local state to track range values for each note
  const [rangeValues, setRangeValues] = useState({});

  const handleRangeChange = (noteId, value) => {
    setRangeValues((prev) => ({ ...prev, [noteId]: value }));
  };

  return (
    <div
      className={`w-64 h-full border-r dark:border-r-dark_gray z-50 bg-light dark:bg-dark border-b-light_gray box-border overflow-auto ${
        !toggle && 'hidden'
      } ${mobileSize && 'fixed w-full border-none pb-20'}`}
    >
      {notes.length ? (
        notes.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/notes/${item.id}`);
              mobileSize && dispatch(toggleSideBar());
            }}
            className={`w-full bg-light_gray200 hover:bg-light_gray300 dark:bg-dark dark:hover:bg-dark_gray800 hover:cursor-pointer ${
              item.id == id ? 'dark:bg-dark_gray800 bg-light_gray300' : ''
            }`}
          >

            <h2
              className="p-2 py-3 dark:text-light"
              style={{
                opacity: (opacity || 100) / 100, // Apply dynamic opacity
              }}
            >
              {item.content.slice(0, 20) + '...'}
            </h2>
            <hr className="border-light_gray300 dark:border-dark_gray" />
          </div>
        ))
      ) : (
        <h1 className="dark:text-light text-center text-opacity-[.3]">Empty list</h1>
      )}
    </div>
  );
};

export default SideBar;
