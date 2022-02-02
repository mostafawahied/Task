/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

import {IMAGE_PATH} from '../../utilities/constant';

const MovieBasicCard = ({movie, navigateToMovie}) => {
  return (
    <View style={styles.card}>
      <ImageLoad
        style={styles.image}
        // placeholderSource={{
        //   uri: 'https://www.beelights.gr/assets/images/empty-image.png',
        // }}
        source={{uri: IMAGE_PATH + movie.poster_path}}
        placeholderStyle={styles.image}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: '100%',
          paddingVertical: 20,
        }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.text}
          onPress={data => navigateToMovie(movie)}>
          {movie.original_title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    margin: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 150,
    backgroundColor: 'gray',
  },
  text: {
    flex: 1,
    fontSize: 22,
    color: 'white',
    paddingRight: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    width: 100,
  },
});

export default MovieBasicCard;
