import { getStaticProps } from "@/services/movie";
import React from "react";
import MovieDetail from "./[moviedetail]/page";


async function Movie({ params }) {
  const { fetchdata: data } = await getStaticProps(params.id);

  return (
    <div>

      <MovieDetail data={data} />
    </div>
  );
}

export default Movie;
