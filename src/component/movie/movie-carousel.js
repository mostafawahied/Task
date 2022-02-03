import React from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';

import MovieBasicCard from './movie-basic';

const MovieCarousel = ({
  movies = [],
  loading = false,
  local = false,
  navigateToMovie,
  page,
  SetPage,
}) => {
  const handleEmpty = () => {
    return (
      <View>
        <Text>No Available Movies</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        horizontal={true}
        ListEmptyComponent={handleEmpty}
        handleEmpty={handleEmpty}
        onEndReached={SetPage}
        onEndReachedThreshold={0.3}
        ListFooterComponent={() =>
          movies.length > 8 ? (
            <View style={styles.footerCont}>
              <ActivityIndicator size="small" color="#47b611" />
            </View>
          ) : null
        }
        renderItem={({item}) => {
          return (
            <MovieBasicCard
              movie={item}
              local={local}
              key={item.id}
              navigateToMovie={navigateToMovie}
            />
          );
        }}
      />
    </View>
  );
};

export default MovieCarousel;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  card: {
    width: 'auto',
    height: 300,
    margin: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 280,
    backgroundColor: 'gray',
  },
  text: {
    flex: 1,
    fontSize: 22,
    color: 'white',
    paddingRight: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
