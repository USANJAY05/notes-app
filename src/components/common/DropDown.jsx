import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpacity } from "../../redux/slice/opacity-slice";

const DropDown = ({ shareLink, setToggle, id }) => {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  // Get the opacity value for the specific ID from Redux state
  const opacity = useSelector((state) => state.setOpacity.value || 100)


  const commingSoon = async () => {
    alert("Comming soon ...");
  };

  const handleRangeChange = (value) => {
    console.log(`Changing opacity for ID: ${id} to ${value}`);
    dispatch(setOpacity({ id, value }));
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute z-50 top-10 right-5 mt-2 w-52 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md"
          style={{
      opacity:(opacity || 100)/100
    }}
    >
      <ul className="py-2">
        {/* Copy Link */}
        <li
          onClick={commingSoon}
          className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        >
          Profile
        </li>

        {/* Range Input */}
        <li className="px-4 py-2">
        <label className="text-sm text-gray-700 dark:text-gray-300" htmlFor="brightness">Brightness</label>
          <input
            id="brightness"
            type="range"
            min={20}
            max={100}
            step={5}
            value={opacity}
            onChange={(e) => handleRangeChange(parseInt(e.target.value, 10))}
            tabIndex={2}
            className="w-full"
          />
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
