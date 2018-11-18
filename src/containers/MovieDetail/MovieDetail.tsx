import React, { Component } from 'react'
import Movie from '../../model/movie';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/model';
import { findMovie } from '../../store/actions';
import Loader from '../../components/Loader';
import './MovieDetail.sass';
import { Link } from 'react-router-dom';

export interface MovieDetailProps {
  movie: Movie
  findMovie: Function
  loading?: boolean
  id: string
}

export interface MovieDetailParams {
  id: string
}

interface MovieDetailState {
  fav: boolean
}

class MovieDetail extends Component<MovieDetailProps, MovieDetailState> {
  componentDidMount() {
    const { id, findMovie } = this.props;
    findMovie(id)
  }


  favMovie = () => {
    const { movie } = this.props;
    localStorage.setItem(movie.imdbID, JSON.stringify(movie))
    this.setState({ fav: true })
  }

  removeFav = () => {
    localStorage.removeItem(this.props.movie.imdbID)
    this.setState({ fav: false })
  }

  isFav = () => {
    return !!localStorage.getItem(this.props.movie.imdbID)
  }

  state = {
    fav: this.isFav()
  }

  render() {
    const { loading, movie: { Title, Genre, Year, Poster, Plot, Runtime, Director, Released, Writer, Language } } = this.props

    if (loading) {
      return <Loader />
    }

    return (
      <React.Fragment>
        <div><Link to='/'><button className="btn">Go back</button></Link></div>
        <div className="MovieDetail">
          <div className="poster">
            <img src={Poster} alt={Title} />
          </div>
          <div className="info">
            <h1>{Title}</h1>
            <h2>{Genre}</h2>
            <h3>{Year}</h3>
            <h4>Directed by: {Director}</h4>
            <h4>Written by: {Writer}</h4>
            <h5>Duration: {Runtime}</h5>
            <h5>Released: {Released}</h5>
            <h5>Languages: {Language}</h5>
            <p>{Plot}</p>
            {!this.isFav() ?
              <button className="btn" onClick={this.favMovie}>Add to favorites</button>
              : <button className="btn danger" onClick={this.removeFav}>Remove from favorites</button>}
          </div>
        </div>
      </React.Fragment>
    )

  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  findMovie: (id: string) => dispatch(findMovie(id))
})

const mapStateToProps = ({ detail: { loading, movie } }: ApplicationState) => ({
  movie,
  loading
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);