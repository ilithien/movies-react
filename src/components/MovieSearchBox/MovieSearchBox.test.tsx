import React from 'react';
import ReactDOM from 'react-dom';
import MovieSearchBox from './MovieSearchBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieSearchBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
