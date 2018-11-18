import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import Header from './components/Header/Header';
import MovieSearchBox from './components/MovieSearchBox';
import { movieReducer } from './store/reducers';
import MovieGrid from './containers/MovieGrid';
import './App.sass';

const reducers = combineReducers({
  movies: movieReducer
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
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
