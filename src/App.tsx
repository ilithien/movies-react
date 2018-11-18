import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import thunk from 'redux-thunk';
import Header from './components/Header/Header';
import { movieReducer, detailReducer } from './store/reducers';
import MovieGrid from './containers/MovieGrid';
import MovieDetail, { MovieDetailParams } from './containers/MovieDetail/MovieDetail';
import './App.sass';

const reducers = combineReducers({
  movies: movieReducer,
  detail: detailReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={MovieGrid} />
            <Route path="/:id" component={({ match: { params: { id } } }: RouteComponentProps<MovieDetailParams>) => <MovieDetail id={id} />} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
