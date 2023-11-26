import { getStaticProps } from "@/services/movie";
import React from "react";
import MovieDetail from "./[moviedetail]/page";

async function Movie({ params }) {
  const { fetchdata: data } = await getStaticProps(params.id);

  return <MovieDetail data={data} />;
}

export default Movie;
