import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

function SlideImage(props) {
  const { title, text } = props;

  return (
    <>
      <div className=" grid  grid-cols-1 md:grid-cols-12  ">
        <div className="  col-span-4  px-4">
          <h1 className=" text-3xl font-medium text-center">
           {title}
          </h1>
          <br />
          <h1>
           {text}
          </h1>
          <br />
        </div>

        <div className=" col-span-8   ">
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {props.slide.map((item) => (
                <>
                  <SwiperSlide className=" ">
                    <div className=" shadow-lg p-4 bg-white  border-2">
                      <div className="flex flex-col  items-center   ">
                        <h1 className=" text-center text-lg font-normal">
                          {item.imgTitle}
                        </h1>
                        <br />
                        <img src={item.img} alt="" width={250} />
                        <br />
                        <h1>{item.imgText || ""}</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideImage;
