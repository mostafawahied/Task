/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';

import {View, ActivityIndicator} from 'react-native';

import GetDiscover from '../../service/GetDiscover';

import MovieCarousel from '../movie/movie-carousel';

const DiscoverCarousel = ({navigateToMovie}) => {
  const [movies, setMovies] = useState([]);
  const [page, SetPage] = useState(1);

  useEffect(() => {
    GetDiscover(page).then(res => {
      setMovies(prevMovies => [...prevMovies, ...res.results]);
    });
  }, [page]);

  return movies.length ? (
    <MovieCarousel
      movies={movies}
      navigateToMovie={navigateToMovie}
      page={page}
      local={false}
      SetPage={() => SetPage(prevPage => prevPage + 1)}
    />
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="small" color="#47b611" />
    </View>
  );
};

export default DiscoverCarousel;
