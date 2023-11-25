import { getStaticProps } from "@/services/movie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Home() {
  const { fetchdata: data } = await getStaticProps("popular");
  console.log(data.results);
  return (
    <div className="text-xs text-red-400 grid grid-cols-custom w-full">
      <div className="grid grid-cols-4 col-start-2 gap-10 ">
        {data.results.map((x) => (
          <Link href={`movie/${x.id}`}>
            <div className="w-full h-[300px] relative">
              <Image
                src={`https://image.tmdb.org/t/p/original/${x.poster_path}`}
                fill={true}
              />
            </div>
            <div>{x.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
