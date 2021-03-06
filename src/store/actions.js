import axios from 'axios';

export const MovieActionTypes = {
  START_LOADING_MOVIES: 'START_LOADING_MOVIES',
  STOP_LOADING_MOVIES: 'STOP_LOADING_MOVIES',
  LOAD_MOVIES: 'LOAD_MOVIES',
  SHOW_ERROR_WHEN_FETCHING_MOVIES: 'SHOW_ERROR_WHEN_FETCHING_MOVIES',
  START_LOADING_DETAIL: 'START_LOADING_DETAIL',
  STOP_LOADING_DETAIL: 'STOP_LOADING_DETAIL',
  LOAD_DETAIL: 'LOAD_DETAIL'
}

export const startLoadingMovies = () => ({
  type: MovieActionTypes.START_LOADING_MOVIES
})

export const stopLoadingMovies = () => ({
  type: MovieActionTypes.STOP_LOADING_MOVIES
})

export const startLoadingDetail = () => ({
  type: MovieActionTypes.START_LOADING_DETAIL
})

export const stopLoadingDetail = () => ({
  type: MovieActionTypes.STOP_LOADING_DETAIL
})

export const loadMovie = (movie) => ({
  type: MovieActionTypes.LOAD_DETAIL,
  payload: movie
})

export const loadMovies = (movies) => ({
  type: MovieActionTypes.LOAD_MOVIES,
  payload: movies
})

export const showErrorWhenLoadingMovies = (error) => ({
  type: MovieActionTypes.SHOW_ERROR_WHEN_FETCHING_MOVIES,
  payload: error
})


export const findMovie = (id) => async dispatch => {
  try {
    dispatch(startLoadingDetail());
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=f12ba140&i=${id}&r=full`)

    if (data) {
      dispatch(loadMovie(data))
    }

    dispatch(stopLoadingDetail())
  } catch (err) {
    dispatch(stopLoadingDetail());
  }
}


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
