import { getStaticProps } from "@/services/movie";
import Image from "next/image";
import React from "react";

async function MovieDetail({ params }) {
  const { fetchdata: data } = await getStaticProps(params.id);
  console.log(data);
  return (
    <div className="bg-cyan-950 relative h-screen">
      <div
        className={`h-[80%] w-full relative  bg-cover bg-center  bg-no-repeat`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      >
        {/* <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          fill={true}
        /> */}
      </div>
    </div>
  );
}

export default MovieDetail;
