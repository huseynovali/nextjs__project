"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Link from "next/link";

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
              <div className="line h-[2px] bg-white"></div>
              <p className="text-[25px]">
              {x.overview.split(" ").slice(0, 20).join(" ") + ' . . .'}
              </p>
              <Link href={`movie/${x.id}`} className="my-3 text-blue-500 text-xl">Film Detail</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSlider;
