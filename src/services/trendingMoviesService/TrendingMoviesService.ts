import { HttpClient } from '../httpClient/HttpClient';
import { IHttpAdapter } from '../httpClient/IHttpAdapter';
import { URLS } from '../urls';
import { TrendingMovieMapper } from './TrendingMovieMapper';
import { GET_TRENDING_MOVIES_ERROR } from './trendingMoviesConstants';
import { ITrendingMoviesResponse, TrendingMovie } from './trendingMoviesModels';

class TrendingMoviesService {
  constructor(private http: IHttpAdapter) {}

  async getTrendingMovies(): Promise<TrendingMovie[]> {
    try {
      const { data } = await this.http.get<ITrendingMoviesResponse>(URLS.trendingMovies);
      const mappedTrendingMovies = data?.results?.map(TrendingMovieMapper.toDomain);
      return mappedTrendingMovies;
    } catch {
      throw new Error(GET_TRENDING_MOVIES_ERROR);
    }
  }
}

export default new TrendingMoviesService(new HttpClient());
