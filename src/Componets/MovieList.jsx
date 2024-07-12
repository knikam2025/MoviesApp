import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards'; 
import Header from './Header';

const MovieList = () => {
  const [moviesByYear, setMoviesByYear] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const years = Array.from({ length: 2024 - 2012 + 1 }, (_, i) => 2012 + i);

  useEffect(() => {
    years.forEach((year) => fetchMovies(year));
  }, []);

  const fetchMovies = async (year) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: 'f6bb098a140185a40a17a8811737e55f',
            sort_by: 'popularity.desc',
            primary_release_year: year,
            page: 1,
            'vote_count.gte': 100,
          },
        }
      );
      setMoviesByYear((prevMovies) => ({
        ...prevMovies,
        [year]: response.data.results.slice(0, 20),
      }));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  const filterMovies = (movies) => {
    if (selectedCategory === 'All') return movies;
    const genreMap = {
      Action: 28,
      Comedy: 35,
      Horror: 27,
      Drama: 18,
      'Sci-Fi': 878,
    };
    const genreId = genreMap[selectedCategory];
    return movies.filter((movie) => movie.genre_ids.includes(genreId));
  };

  return (
    <div className="movie-list">
      <Header setSelectedCategory={setSelectedCategory} />
      <h1>Popular Movies</h1>
      {years.map((year) => (
        <div key={year} className="year-section">
          <div style={{marginLeft:"30px"}}>
          <b>
            <h1 className="year-title"> {year}</h1>
            </b>
          </div>

          <Cards movies={filterMovies(moviesByYear[year] || [])} />
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default MovieList;
