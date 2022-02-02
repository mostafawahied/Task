/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';

import {View, ActivityIndicator} from 'react-native';

import GetDiscover from '../../service/GetDiscover';

import MovieCarousel from '../movie/movie-carousel';

const DiscoverCarousel = ({navigateToMovie}) => {
  const [movies, setMovies] = useState([]);
  const [page, SetPage] = useState();

  useEffect(() => {
    getData(1);
  }, []);

  const getData = from => {
    GetDiscover(from).then(res => {
      setMovies(prevMovies => [...prevMovies, ...res.results]);
      // SetPage(res.page);
    });
  };
  return movies.length ? (
    <MovieCarousel
      movies={movies}
      navigateToMovie={navigateToMovie}
      page={page}
      SetPage={() => {
        console.log('reach ended', page);
        if (page !== undefined) {
          SetPage(prevPage => (prevPage ? prevPage : 1) + 1);
          console.log('reach ended', movies.length);
          getData((page ? page : 1) + 1);
        }
      }}
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
