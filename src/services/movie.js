export async function getStaticProps(title) {
  const url = `https://api.themoviedb.org/3/movie/${title}?language=en-US&page=1`
  
  //popular?api_key=${process.env.api_key}&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.api_key
    }
  };
  const response = await fetch(url,options);
  const fetchdata = await response.json();

  return {
    fetchdata,
  };
} 
  