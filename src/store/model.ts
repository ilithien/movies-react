import Movie from '../model/movie'

export interface ApplicationState {
  movies: MoviesState
}

export interface MoviesState {
  data: Movie[],
  loading: Boolean,
  error?: String | null
}