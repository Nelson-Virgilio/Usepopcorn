// import React from 'react';
import { useState, useEffect } from 'react';

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setToMovies] = useState([]);

  // const getRatedMoies = async (url) => {
  //    const res = await fetch(url);
  //    const dados = await res.json();
  //     console.log(dados);
  //   };
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDUxZTNkNWEwNWVjYjI4MDhhYmZmNGJiNDVmMTE0ZSIsInN1YiI6IjY1Nzk3OWZkYTFkMzMyMDEzOGViYTY2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rxkWL3FTJle9vmtRJrxStlThUeBamalckX-WE2PHqmk',
      },
    };
    fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //   const topRatedUrl = `${movieUrl}top_rated?${apiKey}`;
  //   getRatedMoies(topRatedUrl);
  // }, []);

  return <div></div>;
};

export default Home;
