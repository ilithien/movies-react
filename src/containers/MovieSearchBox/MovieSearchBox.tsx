import React, { Component } from 'react'
import { MovieSearchBoxProps } from './MovieSearchBox.model';
import { connect } from 'react-redux';
import { findMovies } from '../../store/actions';
import './MovieSearchBox.sass';

class MovieSearchBox extends Component<MovieSearchBoxProps> {

  findMovies = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    this.props.findMovies(value);
  }

  render() {
    return (
      <div className="MovieSearchBox">
        <input placeholder="Type some movie title..." onChange={this.findMovies} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  findMovies: (search: String) => dispatch(findMovies(search))
})

export default connect(null, mapDispatchToProps)(MovieSearchBox);