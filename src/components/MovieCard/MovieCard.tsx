import React from 'react'
import Movie from '../../model/movie';
import { Link } from 'react-router-dom';
import './MovieCard.sass';

const MovieCard = ({ Title, imdbID, Year, Poster }: Movie) => {
  return (
    <div className="MovieCard">
      <div className="poster">
        <Link to={`/${imdbID}`}><img src={Poster} alt={Title} /></Link>
      </div>
      <div className="detail">
        <span className="movie-title">{Title}</span>
        <span className="movie-year">{Year}</span>
      </div>
    </div>
  )
}

export default MovieCard;