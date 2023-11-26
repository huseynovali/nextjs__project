import Container from "@/components/Container";
import { getStaticProps } from "@/services/movie";
import Image from "next/image";
import Link from "next/link";

import React from "react";

async function Home() {
  const { fetchdata: data } = await getStaticProps("popular");

  return (
    <Container>
      
      <div className="grid grid-cols-4  gap-10  bg-cyan-900 ">
        {data.results.map((x) => (
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
  );
}

export default Home;
