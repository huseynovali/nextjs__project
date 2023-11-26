import Container from "@/components/Container";
import HomeSlider from "@/components/HomeSlider";
import { getStaticProps } from "@/services/movie";
import Image from "next/image";
import Link from "next/link";

import React from "react";

async function Home() {
  const { fetchdata: pop_data } = await getStaticProps("popular");
  const { fetchdata: now__data } = await getStaticProps("now_playing");
  console.log(now__data);
  return (
    <div>  
       <HomeSlider data={now__data} />
      <Container>
     
        <div className="grid grid-cols-4  gap-10  bg-cyan-900 ">
          {pop_data.results.map((x) => (
            <Link href={`movie/${x.id}`} key={x.div}>
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
      </Container>
    </div>
  );
}

export default Home;
