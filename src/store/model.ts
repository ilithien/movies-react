import Movie from '../model/movie'

export interface ApplicationState {
  movies: MoviesState
  detail: DetailState
}

export interface MoviesState {
  data: Movie[],
  loading: boolean,
  error?: String | null
}


export interface DetailState {
  movie: Movie
  loading: boolean
}