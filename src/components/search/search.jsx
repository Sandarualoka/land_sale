import React from 'react';
import { FaHome, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-full p-2 mx-auto my-4 max-w-4xl">
      <div className="flex items-center w-1/3 p-2">
        <FaHome className="text-gray-400" />
        <select className="ml-2 w-full bg-white border-none outline-none">
          <option>Select your wish</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Land</option>
        </select>
      </div>
      <div className="flex items-center w-1/3 p-2">
        <FaMapMarkerAlt className="text-gray-400" />
        <select className="ml-2 w-full bg-white border-none outline-none">
          <option>Select a Location</option>
          <option>New York</option>
          <option>California</option>
          <option>Florida</option>
        </select>
      </div>
      <div className="flex items-center w-1/3 p-2">
        <FaDollarSign className="text-gray-400" />
        <select className="ml-2 w-full bg-white border-none outline-none">
          <option>Select your desired budget</option>
          <option>$50,000 - $100,000</option>
          <option>$100,000 - $200,000</option>
          <option>$200,000+</option>
        </select>
      </div>
      <button className="bg-black text-white rounded-full px-6 py-2 ml-2 font-bold">SEARCH</button>
    </div>
  );
};

export default Search;
