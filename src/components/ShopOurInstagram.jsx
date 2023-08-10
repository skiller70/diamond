import React from "react";

function ShopOurInstagram() {
  return (
    <>
      <div>
        <div className=" my-6 px-8"> 
          <h1 className=" text-2xl font-normal">Shop Our Instagram</h1>
        </div>

        {/* INSTAGRAM IMAGE */}
    
        <div className="mx-8  grid grid-cols-1 md:grid-cols-12">
          {/* FIRST CONTAINER */}
          <div className=" col-span-5 hover:scale-110 ease-in duration-200  ">
            <img className=" h-[100%]" src="/insta1.jpg" alt="" />
          </div>
          {/* FIRST CONTAINER */}

          {/* SECOND CONTAINER */}
          <div className=" col-span-7  ">
            <div className="  grid grid-cols-1 md:grid-cols-3 my-6">
              <div>
                <img
                  className=" hover:scale-110 ease-in duration-200 "
                  src="/insta2.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" hover:scale-110 ease-in duration-200 "
                  src="/insta3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" hover:scale-110 ease-in duration-200 "
                  src="/insta4.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" hover:scale-110 ease-in duration-200 "
                  src="/insta5.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" hover:scale-110 ease-in duration-200 "
                  src="/insta6.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" hover:scale-110 ease-in duration-200 "
                  src="/insta7.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* SECOND CONTAINER */}
        </div>

        {/* INSTAGRAM IMAGE */}
      </div>
    </>
  );
}

export default ShopOurInstagram;
