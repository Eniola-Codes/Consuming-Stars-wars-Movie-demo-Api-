import FormFetch from "./Components/FormMovies/FormFetch";
import FormMovie from "./Components/FormMovies/FormMovie";
import Card from "./Components/UI/card";
import classes from "./App.module.css";
import { useState } from "react";


function App() {
  const [fetchMovies, setFetchMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);

  async function onFetchHandler() {
    setIsLoading(true);
    setError(null);
    try{
    const response = await fetch("https://swapi.dev/api/films/");

    if(!response.ok)
    {
      throw new Error('Something went wrong');
    }

    const data = await response.json();

    const transformedData = data.results.map((Moviedata) => {
      return {
        key: Moviedata.episode_id,
        releaseDate: Moviedata.release_date,
        title: Moviedata.title,
        openingText: Moviedata.opening_crawl,
        director: Moviedata.director,
        producer: Moviedata.producer,
      };
    });
    setFetchMovies(transformedData);
    setIsLoading(false);  
  }
  catch(error) {
    setError(error.message);
  }
  setIsLoading(false);  
  }

  let movieValue;

if(fetchMovies.length > 0)
{
  movieValue = fetchMovies.map((items) => (
    <FormMovie
      title={items.title}
      releaseDate={items.releaseDate}
      openingText={items.openingText}
      director={items.director}
      producer={items.producer}
    />
  ))
}

if(fetchMovies.length === 0)
{
  movieValue = <p>No Movies Found</p>
}

if(error)
{
  movieValue = <p>Something went wrong!</p>
}

if(isLoading)
{
  movieValue = <p>Loading...</p>
}



  return (
    <>
      <FormFetch onFetch={onFetchHandler} />
      <Card className={classes.card}>
        {movieValue}
      </Card>
    </>
  );
}

export default App;
