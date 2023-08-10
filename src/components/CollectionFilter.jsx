import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

function CollectionFilter() {
  return (
    <div>
      <Swiper
        className=" "
        modules={[Pagination, Scrollbar, A11y, Navigation]}
        navigation
        autoHeight={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
      >
        <div className=" border-2   ">
          <SwiperSlide className=" ">
            <div className="  my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center   cursor-pointer hover:border-2">
                <img src="/Radiant.png" alt="" width={50} />
                <h1 className=" text-xs">Radiant</h1>
                <h1></h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" ">
            <div className="  my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center   cursor-pointer hover:border-2">
                <img src="/round.png" alt="" width={50} />
                <h1 className=" text-xs">Round</h1>
                <h1></h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" ">
            <div className="  my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center   cursor-pointer hover:border-2">
                <img src="/emerald.png" alt="" width={50} />
                <h1 className=" text-xs">Emerald</h1>
                <h1></h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <div className="  my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center   cursor-pointer hover:border-2">
                <img src="/asscher.png" alt="" width={50} />
                <h1 className=" text-xs">Asscher</h1>
                <h1></h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" ">
            <div className="  my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center   cursor-pointer hover:border-2">
                <img src="/cushion.png" alt="" width={50} />
                <h1 className=" text-xs">Cushion</h1>
                <h1></h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <div className="  my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center   cursor-pointer hover:border-2">
                <img src="/marquise.png" alt="" width={50} />
                <h1 className=" text-xs">Marquise</h1>
                <h1></h1>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide className=" ">
            <div className="  my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center   cursor-pointer hover:border-2">
                <img src="/oval.png" alt="" width={50} />
                <h1 className=" text-xs">Oval</h1>
                <h1></h1>
              </div>
            </div>
          </SwiperSlide>



          <SwiperSlide className=" ">
            <div className="  my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center   cursor-pointer hover:border-2">
                <img src="/princess.png" alt="" width={50} />
                <h1 className=" text-xs">Princess</h1>
                <h1></h1>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      CollectionFilter
    </div>
  );
}

export default CollectionFilter;
