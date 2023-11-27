import Container from "@/components/Container";
import { getStaticProps } from "@/services/movie";
import Image from "next/image";
import Link from "next/link";

import React, { lazy } from "react";
const HomeSlider = lazy(() => import('@/components/HomeSlider'));

async function Home() {
  const { fetchdata: pop_data } = await getStaticProps("popular");
  const { fetchdata: now__data } = await getStaticProps("now_playing");
  return (
    <div>
      <HomeSlider data={now__data} />
      <Container>
        <div className="grid grid-cols-4  gap-10  bg-cyan-900 py-20">
          {pop_data.results.map((x) => (
            <Link href={`movie/${x.id}`} key={x.div}>
              <div className="w-full h-[300px]  relative">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${x.poster_path}`}
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  alt={x.title}
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
