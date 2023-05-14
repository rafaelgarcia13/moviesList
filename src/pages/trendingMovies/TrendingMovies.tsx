import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';

import TrendingMoviesService from '../../services/trendingMoviesService/TrendingMoviesService';
import { URLS } from '../../services/urls';

const TrendingMovies: React.FC = () => {
  const { data: movies } = useQuery(URLS.trendingMovies, () =>
    TrendingMoviesService.getTrendingMovies(),
  );

  console.log('movies', JSON.stringify(movies));
  return (
    <View>
      <Text>oi</Text>
    </View>
  );
};

export { TrendingMovies };
