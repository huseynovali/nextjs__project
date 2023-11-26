import React from "react";
import NotFound from "./not-found";

function MovieDetail({ data }) {
  if (!data.title) {
    return <NotFound />;
  }
  return (
    <div className="bg-cyan-950 relative h-screen">
      <div
        className={`h-full w-full relative  bg-cover bg-center  bg-no-repeat`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      ></div>
      <div className="movie__info h-full absolute left-0 bottom-0 w-1/2 bgLinear flex flex-col justify-end">
        <div className="p-10">
          <div className="flex items-center">
            <div
              className="w-[70px] h-[50px] relative bg-contain bg-no-repeat bg-white bg-opacity-10  bg-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.production_companies[0].logo_path})`,
              }}
            ></div>

            <p className="text-white text-[50px] pl-5">
              {data.production_companies[0].name}
            </p>
          </div>
          <p className="text-[64px] mt-5 text-[#C89F65]">
            {data.original_title}
          </p>
        </div>
        <div className="line w-full h-1 bg-white "></div>
        <div className="p-10">
          <p className="text-white text-2xl">{data.overview.slice(0, 150)}</p>
        </div>{" "}
      </div>
    </div>
  );
}

export default MovieDetail;
