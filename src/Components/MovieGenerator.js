import React, { useState, useEffect } from 'react';
import '../App.css'
const MovieGenerator = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showMovie, setShowMovie] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (isClicked || showMovie) {
      // Cargar los datos del archivo JSON y generar una película aleatoria
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/movies');
          const data = await response.json();
          const movies = data.movies;
          const randomIndex = Math.floor(Math.random() * movies.length);
          setMovie(movies[randomIndex]);
          setShowMovie(true);
        } catch (error) {
          console.log('Error al cargar los datos:', error);
        }
      };

      fetchData();
    }
  }, [isClicked, showMovie]);

  if (!showMovie) {
    return (
      <div>
        {isClicked ? (
          <div>Loading...</div>
        ) : (
           <div><h1 className='index-title'>Descubre películas sorprendentes con un solo clic. Si no te gusta, ¡puedes elegir de nuevo! Nuestra app automática te ofrece opciones ilimitadas. ¡Disfruta del cine sin preocuparte por la elección!</h1>
          <button onClick={() => setIsClicked(true)}>Generar película aleatoria</button></div> 
        )}
      </div>
    );
  }

  return (
    <div >
      <h2 className='movie-title'>{movie.title}</h2>
      <h3 className='movie-director'>Director: {movie.director}</h3>
      <img className='movie-imge'  src={movie.src} alt={movie.title} />
      <div>
      <button onClick={() => setShowMovie(false)}>Volver a generar</button>
      </div>
      
    </div>
  );
};

export default MovieGenerator;
