import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

function CollectionMetal() {
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
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
      >
        <div className=" border-2   ">
          <SwiperSlide className=" ">
            <div className="   my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center  w-20  cursor-pointer hover:border-2">
                <img src="/white10.png" alt="" width={50} />
                <h1 className=" text-xs text-center">14k White Gold</h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" ">
            <div className="   my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center  w-20  cursor-pointer hover:border-2">
                <img src="/gold10.png" alt="" width={50} />
                <h1 className=" text-xs text-center">14k Yellow Gold</h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" ">
            <div className="   my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center  w-20  cursor-pointer hover:border-2">
                <img src="/rose10.png" alt="" width={50} />
                <h1 className=" text-xs text-center">
                  14k Rose <br /> Gold
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <div className="   my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center  w-20  cursor-pointer hover:border-2">
                <img src="/white18.png" alt="" width={50} />
                <h1 className=" text-xs text-center">18k White Gold</h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" ">
            <div className="   my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center  w-20  cursor-pointer hover:border-2">
                <img src="/gold18.png" alt="" width={50} />
                <h1 className=" text-xs text-center">18k Yellow Gold</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <div className="   my-4">
              <div className=" flex z-10 py-1 flex-col items-center hover:border-green-200 shadow-lg  rounded-md  justify-center  w-20  cursor-pointer hover:border-2">
                <img src="/rose18.png" alt="" width={50} />
                <h1 className=" text-xs text-center">18k Rose Gold</h1>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default CollectionMetal;
