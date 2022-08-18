import React from "react";

export const BillIcons = () => {
  return (
    <div className="flex items-center ">
      <button className=" p-2 text-gray-600 hover:bg-xgray-extralight hover:rounded-full focus:bg-xgray-light focus:rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 hover:bg-xgray-extralight hover:rounded-full focus:bg-xgray-light focus:rounded-full "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
      </button>
      <button className=" p-2 ml-4 text-gray-600 hover:bg-xgray-extralight hover:rounded-full focus:bg-xgray-light focus:rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600   text-gray-600 hover:bg-xgray-extralight hover:rounded-full focus:bg-xgray-light focus:rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  );
};
