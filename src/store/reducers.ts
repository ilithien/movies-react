import { MovieActionTypes } from './actions';
import { MoviesState } from './model';
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