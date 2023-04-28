import { HttpClient } from './HttpClient/HttpClient';
import { IHttpAdapter } from './HttpClient/IHttpAdapter';

export interface ITrendingMoviesResponse {
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
}

export interface Movies {
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

class MoviesService {
  constructor(private http: IHttpAdapter) {}

  async getTrendingMovies(): Promise<ITrendingMoviesResponse> {
    try {
      const { data } = await this.http.get<ITrendingMoviesResponse>(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=b6bfeef08d90a6170a96ed321b91db41',
      );

      return data;
    } catch {
      throw new Error('Deu erro');
    }
  }
}

export default new MoviesService(new HttpClient());
