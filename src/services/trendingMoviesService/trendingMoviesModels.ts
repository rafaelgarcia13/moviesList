interface TrendingMovieResponse {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ITrendingMoviesResponse {
  page: number;
  results: TrendingMovieResponse[];
  total_pages: number;
  total_results: number;
}

class TrendingMovie {
  constructor(movie: TrendingMovie) {
    Object.assign(this, movie);
  }
  public backdropImagePath: string;
  public posterImagePath: string;
  public title: string;
  public overview: string;
  public releaseDate: string;
  public rating: number;
  public isAdultMovie: boolean;
}

export type { ITrendingMoviesResponse, TrendingMovieResponse };

export { TrendingMovie };
