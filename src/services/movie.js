export async function getStaticProps() {
  const url =
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.api_key}&language=en-US&page=1`;

  const response = await fetch(url);
  const fetchdata = await response.json();
  const data = await fetchdata.results;
  return {
    data,
  };
}

