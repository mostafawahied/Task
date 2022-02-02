/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';

import {View, StyleSheet, ScrollView, Text} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

import {IMAGE_PATH} from '../utilities/constant';
import {GlobalContext} from '../context/global';

const MovieDetail = ({navigation, route}) => {
  const {genders} = useContext(GlobalContext);

  const genderName = (genderList = []) =>
    genders
      .filter(gender => genderList.includes(gender.id))
      .map(gender => gender.name)
      .slice(0, 2)
      .join('/ ');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={{position: 'relative', marginLeft: -30}}>
          <ImageLoad
            style={styles.image}
            source={{uri: IMAGE_PATH + route.params.movie.poster_path}}
            placeholderStyle={styles.image}
          />
        </View>
        <Text style={styles.textShip}>{route.params.movie.original_title}</Text>
        <Text style={styles.textDuration}>
          {route.params.movie.release_date}
        </Text>
        <Text style={styles.textGender}>
          {genderName(route.params.movie.genre_ids)}
        </Text>

        <Text style={styles.textDesc}>{route.params.movie.overview}</Text>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    // height: '100%',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    maxHeight: '100%',
    overflow: 'hidden',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
    overflow: 'scroll',
  },
  book: {
    position: 'relative',

    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgb(202, 132, 4);',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ticket: {
    position: 'absolute',
    left: 40,
    fontSize: 36,
    marginRight: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  containerResume: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRight: {
    flex: 1,
    padding: 20,
    position: 'relative',
    height: '100%',
  },
  containerCinema: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerShip: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    padding: 10,
    width: 120,
    marginBottom: 10,
  },
  containerShipAction: {
    position: 'absolute',
    left: -60,
    bottom: 0,
  },
  textShip: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
    paddingVertical: 10,
    textAlign: 'left',
  },
  textDuration: {
    color: 'gray',
    fontSize: 22,
    fontWeight: '400',
    paddingBottom: 10,
  },
  textGender: {
    color: 'orange',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 15,
  },
  textDesc: {
    color: 'gray',
    fontSize: 16,

    marginBottom: 15,
  },
});
