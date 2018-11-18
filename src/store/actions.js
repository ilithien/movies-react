import axios from 'axios';

export const MovieActionTypes = {
  START_LOADING_MOVIES: 'START_LOADING_MOVIES',
  STOP_LOADING_MOVIES: 'STOP_LOADING_MOVIES',
  LOAD_MOVIES: 'LOAD_MOVIES',
  SHOW_ERROR_WHEN_FETCHING_MOVIES: 'SHOW_ERROR_WHEN_FETCHING_MOVIES'
}

export const startLoadingMovies = () => ({
  type: MovieActionTypes.START_LOADING_MOVIES
})

export const stopLoadingMovies = () => ({
  type: MovieActionTypes.STOP_LOADING_MOVIES
})

export const loadMovies = (movies) => ({
  type: MovieActionTypes.LOAD_MOVIES,
  payload: movies
})

export const showErrorWhenLoadingMovies = (error) => ({
  type: MovieActionTypes.SHOW_ERROR_WHEN_FETCHING_MOVIES,
  payload: error
})

export const findMovies = (search) => async dispatch => {
  try {
    dispatch(startLoadingMovies());
    const { data: { Search, Error } } = await axios.get(`http://www.omdbapi.com/?apikey=f12ba140&s=${search}&type=movie`);

    if (Error) {
      showErrorWhenLoadingMovies(Error)
    } else {
      dispatch(loadMovies(Search));
    }
    dispatch(stopLoadingMovies())
  } catch (err) {
    showErrorWhenLoadingMovies(`General error ocurred when fetching movies`)
    dispatch(stopLoadingMovies())
  }
}
