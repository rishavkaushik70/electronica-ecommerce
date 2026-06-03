import React from "react";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MobileFilter = ({
  openFilter,
  setOpenFilter,
  categories,
  brandName,
  search,
  setSearch,
  brand,
  setBrand,
  category,
  setCategory,
  priceRange,
  setPriceRange,
  handleBrandChange,
  handleCategoryChange,
}) => {
  return (
    <>
      <div className="bg-gray-100 flex justify-between items-center md:hidden px-4 py-2 mt-5 rounded-md">
        <h1 className="font-semibold text-xl text-gray-800">Filters</h1>
        {openFilter ? (
          <IoClose
            className="text-gray-800 size-7"
            onClick={() => setOpenFilter(false)}
          />
        ) : (
          <FaFilter
            className="text-gray-800"
            onClick={() => setOpenFilter(true)}
          />
        )}
      </div>
      {openFilter ? (
        <div className="bg-gray-100 p-2 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white p-2 rounded-md border-gray-400 border-2 placeholder:text-black w-full"
            value={search}
          />
          {/* category only data */}

          <h1 className="mt-5 font-semibold text-xl">Category</h1>
          <div className="flex flex-col gap-2 mt-3">
            {categories?.map((item, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <input
                    type="checkbox"
                    name={item}
                    checked={category === item}
                    value={item}
                    onChange={handleCategoryChange}
                  />
                  <button className="cursor-pointer">{item}</button>
                </div>
              );
            })}
          </div>
          {/* brand only data */}
          <h1 className="mt-5 font-semibold text-xl mb-3">Brand</h1>
          <select
            name=""
            id=""
            className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
            value={brand}
            onChange={handleBrandChange}
          >
            {brandName.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item.toUpperCase()}
                </option>
              );
            })}
          </select>
          {/* price range */}

          <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Price Range : ₹{priceRange[0]} - ₹{priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            />
          </div>
          <button
            className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
            onClick={() => {
              setSearch("");
              setPriceRange([0, 5000]);
              setCategory("All");
              setBrand("All");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : null}
    </>
  );
};

export default MobileFilter;
