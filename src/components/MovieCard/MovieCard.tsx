import React from 'react'
import Movie from '../../model/movie';
import './MovieCard.sass';
import { Link } from 'react-router-dom';

const MovieCard = ({ Title, imdbID, Year, Poster, Genre }: Movie) => {
  return (
    <div className="MovieCard">
      <div className="poster">
        <Link to="/hey"><img src={Poster} alt={Title} /></Link>
      </div>
      <div className="detail">
        <span className="movie-title">{Title}</span>
        <span className="movie-year">{Year}</span>
      </div>
    </div>
  )
}

export default MovieCard;