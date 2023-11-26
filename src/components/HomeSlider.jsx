"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function HomeSlider({ data }) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper h-[95vh]"
    >
      {data.results.map((x) => (
        <SwiperSlide
          className="w-full  bg-[length:100%_120%] bg-no-repeat  bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${x.poster_path})`,
          }}
        >
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeSlider;
