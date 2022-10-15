import React from "react";
import { IoStarSharp } from "react-icons/io5";

const PropertyCard = ({ property = null }) => {
  const numberWithCommas = (value) => {
    return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <div className="relative w-full min-h-200 text-right">
          <a className="lisitng-propertise ">
            <img
              className="rounded-t-lg"
              src={property?.images[0]?.largeImageURL}
              alt=""
            />
            <i
              className="fa-regular fa-heart fa-xl text-white"
              style={{ position: "absolute", right: "10px", top: "18px" }}
            ></i>
          </a>
        </div>
        <div className="p-1">
          <span className="flex justify-between">
            <p className="text-xl mb-2 font-extrabold tracking-tight text-gray-1000 dark:text-white">
              {property?.title}
            </p>
            <span className="flex items-center text-xl">
              <IoStarSharp className="ml-2" /> {property?.rating}
            </span>
          </span>
          <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
            {property?.address}
          </p>
          <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
            {property?.date_created}
          </p>
          <p className="text-lg font-normal text-gray-800 dark:text-gray-400 ">
            <span className="text-xl font-black">${property?.price}</span> night
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
