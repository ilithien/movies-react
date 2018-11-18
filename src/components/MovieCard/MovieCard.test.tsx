import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';
import { MemoryRouter } from 'react-router';
import Movie from '../../model/movie';

it('renders without crashing', () => {
  const movie: Movie = {
    Title: 'Test title',
    Poster: 'false url',
    imdbID: '1111',
    Year: '2018'
  }


  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><MovieCard movie={movie} /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
