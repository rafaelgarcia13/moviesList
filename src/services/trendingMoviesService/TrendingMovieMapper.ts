import { TrendingMovie, TrendingMovieResponse } from './trendingMoviesModels';

class TrendingMovieMapper {
  toDomain(domainTrendingMovie: TrendingMovieResponse) {
    return new TrendingMovie({
      backdropImagePath: `https://image.tmdb.org/t/p/{widht}/${domainTrendingMovie?.backdrop_path}`,
      posterImagePath: `https://image.tmdb.org/t/p/{widht}/${domainTrendingMovie?.poster_path}`,
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

export default new TrendingMovieMapper();
