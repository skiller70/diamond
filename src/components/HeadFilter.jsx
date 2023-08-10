import React from "react";

function HeadFilter() {
  return (
    <>
      <div className=" md:flex-row flex-col flex md:gap-x-16 gap-y-6 bg-green-300 py-3 md:mx-16 px-10">
        {/* PRICE */}
        <div>
          <select
            onChange={(e) => {
              setRingSize(e.target.value);
            }}
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-green-300 block  w-[100%] md:w-[150%] p-2.5 dark:bg-gray-700 dark:border-green-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>PRICE</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>
        {/* PRICE */}

        {/* TYPE */}
        <div>
          <select
            onChange={(e) => {
              setRingSize(e.target.value);
            }}
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-green-300 block  w-[100%] md:w-[150%] p-2.5 dark:bg-gray-700 dark:border-green-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>TYPE</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>
        {/* TYPE  */}
        {/* METAL */}

        <div>
          <select
            onChange={(e) => {
              setRingSize(e.target.value);
            }}
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-green-300 block  w-[100%] md:w-[150%] p-2.5 dark:bg-gray-700 dark:border-green-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>METAL</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>

        {/* METAL */}

        {/* GENDER */}

        <div>
          <select
            onChange={(e) => {
              setRingSize(e.target.value);
            }}
            id="countries"
            className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-green-300 block  w-[100%] md:w-[150%] p-2.5 dark:bg-gray-700 dark:border-green-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>GENDER</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>

        {/* GENDER */}
      </div>

      
    </>
  );
}

export default HeadFilter;
