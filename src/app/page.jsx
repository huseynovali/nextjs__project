import { getStaticProps } from "@/services/movie";
import Image from "next/image";
import React from "react";

async function Home() {
  const data = await getStaticProps();
  console.log(data.data);
  return (
    <div className="text-xs text-red-400 grid grid-cols-custom w-full">
      <div className="grid grid-cols-4 col-start-2 gap-10 ">
        {data.data.map((x) => (
          <div>
            <div className="w-full h-[300px] relative">
              <Image
                src={`https://image.tmdb.org/t/p/original/${x.poster_path}`}
                fill={true}
              />
            </div>
            <div>{x.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
