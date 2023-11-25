export async function getStaticProps() {
    const response = await fetch('https://api.example.com/about-data');
    const data = await response.json();
  
    return {
      props: {
        data,
      },
    };
  }