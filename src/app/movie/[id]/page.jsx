import { getStaticProps } from "@/services/movie";
import Image from "next/image";
import React from "react";

async function MovieDetail({ params }) {
  const {fetchdata:data} = await getStaticProps(params.id);
  console.log(data);
  return (
    <div>
      {" "}
      <Image
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        width={300}
        height={300}
      />
    </div>
  );
}

export default MovieDetail;
