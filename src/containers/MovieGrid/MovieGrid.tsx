import React from 'react'
import { connect } from 'react-redux';
import { ApplicationState, MoviesState } from '../../store/model';
import Loader from '../../components/Loader';
import MovieCard from '../../components/MovieCard';
import MovieSearchBox from '../../containers/MovieSearchBox';
import './MovieGrid.sass';

interface MovieGridProps {
  movies: MoviesState
}

const MovieGrid: React.SFC<MovieGridProps> = ({ movies: { data, loading, error } }: MovieGridProps) => {
  return <React.Fragment>
    <MovieSearchBox />
    <div className="MovieGrid">
      {loading && <Loader />}

      {
        !loading && !error && data.map(movie => <MovieCard key={movie.imdbID} {...movie} />)
      }
    </div>
  </React.Fragment>
}

const mapStateToProps = ({ movies }: ApplicationState) => ({
  movies
});

export default connect(mapStateToProps)(MovieGrid);