import { MovieActionTypes } from './actions';
import { MoviesState, DetailState } from './model';
import { Reducer } from 'redux';

const initialState: MoviesState = {
  data: [],
  loading: false
}

export const movieReducer: Reducer<MoviesState> = (state = initialState, { type, payload }) => {
  switch (type) {
    case MovieActionTypes.START_LOADING_MOVIES:
      return { ...state, loading: true }
    case MovieActionTypes.STOP_LOADING_MOVIES:
      return { ...state, loading: false }
    case MovieActionTypes.LOAD_MOVIES:
      return { ...state, data: payload }
    case MovieActionTypes.SHOW_ERROR_WHEN_FETCHING_MOVIES:
      return { ...state, error: payload }
    default:
      return state;
  }
}

const initialDetailState: DetailState = {
  loading: false,
  movie: { Title: '', Year: '', imdbID: '', Poster: '' }
}

export const detailReducer: Reducer<DetailState> = (state = initialDetailState, { type, payload }) => {
  switch (type) {
    case MovieActionTypes.START_LOADING_DETAIL:
      return { ...state, loading: true }
    case MovieActionTypes.STOP_LOADING_DETAIL:
      return { ...state, loading: false }
    case MovieActionTypes.LOAD_DETAIL:
      return { ...state, movie: payload }
    default:
      return state;
  }
}