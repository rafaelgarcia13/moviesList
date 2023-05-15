import { TrendingMovie, TrendingMovieResponse } from './trendingMoviesModels';

class TrendingMovieMapper {
  static toDomain(domainTrendingMovie: TrendingMovieResponse) {
    return new TrendingMovie({
      backdropImagePath: `https://image.tmdb.org/t/p/original${domainTrendingMovie?.backdrop_path}`,
      posterImagePath: `https://image.tmdb.org/t/p/original${domainTrendingMovie?.poster_path}`,
      title: domainTrendingMovie?.original_title,
      overview: domainTrendingMovie?.overview,
      releaseDate: domainTrendingMovie?.release_date,
      rating: domainTrendingMovie?.vote_average,
      isAdultMovie: domainTrendingMovie?.adult,
    });
  }

  /* toPersistence(persistenceContact) {
    return {};
  } */
}

export { TrendingMovieMapper };
