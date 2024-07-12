import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards'; // Assuming you have a Cards component for rendering movies

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentYear, setCurrentYear] = useState(2012);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies(currentYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;
      const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;

      if (bottom) {
        loadMoreMovies('next');
      } else if (document.documentElement.scrollTop === 0 && currentYear > 2012) {
        loadMoreMovies('previous');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, currentYear]);

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
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  const loadMoreMovies = (direction) => {
    if (loading) return;

    if (direction === 'next') {
      setCurrentYear((prevYear) => prevYear + 1);
    } else if (direction === 'previous' && currentYear > 2012) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  return (
    <div className="movie-list">
      <h1>Popular Movies of {currentYear}</h1>
      <Cards movies={movies} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default MovieList;
