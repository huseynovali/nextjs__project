"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function HomeSlider({ data }) {
  return (
    <div className="hompage__slider">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[95vh]"
        loop
      >
        {data.results.map((x) => (
          <SwiperSlide
            className="w-full  bg-[length:100%_120%] bg-no-repeat  bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${x.poster_path})`,
            }}
          >
            <div className="cover absolute w-full h-full bg-black bg-opacity-50"></div>
            <div className="text-white h-full flex flex-col justify-end pl-20 w-[700px] relative z-30 pb-20">
              <p className="text-[50px]">{x.title}</p>
              <div className="lene  h-[2px] bg-white"></div>
              <p className="text-[25px]">
                {x.overview.length > 200
                  ? x.overview.slice(0, 200) + "..."
                  : x.overview}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSlider;
