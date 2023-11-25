export async function getStaticProps(title) {
  const url = `https://api.themoviedb.org/3/movie/${title}?language=en-US&page=1`
  
  //popular?api_key=${process.env.api_key}&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzFkNDQ5MmJkNjM3NjEzZGNkNWUwM2QxMGFkNDA2ZiIsInN1YiI6IjYzMWQwODQ1ZmE0MDQ2MDA4MzY5ZWM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.itPWVA8o2zDG_VsewyxojbcHBEvwVTNSWC6MeHny-Uc'
    }
  };
  const response = await fetch(url,options);
  const fetchdata = await response.json();

  return {
    fetchdata,
  };
} 
  