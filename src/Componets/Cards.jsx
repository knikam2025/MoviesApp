import React from 'react';

const Cards = ({ movies }) => {
  return (
    <div className="cards-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="card-image" />
          <div className="card-content">
            <div className="card-title">{movie.title}</div>
            <div className="card-rating">Rating: {movie.vote_average}</div>
            <div className="card-genre">Genres: {movie.genre_ids.join(', ')}</div>
            <div className="card-overview">{movie.overview.split(' ').slice(0, 10).join(' ')}...</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
