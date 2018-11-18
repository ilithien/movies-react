import React, { Component } from 'react'
import { MovieSearchBoxProps } from './MovieSearchBox.model';
import './MovieSearchBox.sass';
import { connect } from 'react-redux';
import { findMovies } from '../../store/actions';

class MovieSearchBox extends Component<MovieSearchBoxProps, any> {

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

const mapDispatchToProps = (dispatch: any) => ({
  findMovies: (search: String) => dispatch(findMovies(search))
})

export default connect(null, mapDispatchToProps)(MovieSearchBox);