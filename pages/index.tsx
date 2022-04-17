import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';

function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await fetch(`/api/movies`).then(res => res.json());
      setMovies(results);
    })();
  }, []);

  return (
    <>
      <Seo title="Home"></Seo>
      {!movies && <h4>Loading...</h4>}
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default Home;
