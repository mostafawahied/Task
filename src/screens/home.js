import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import DiscoverCarousel from '../component/discover/discover-carousel';
import MovieCarousel from '../component/movie/movie-carousel';

const HomeScreen = ({navigation}) => {
  const myMovie = [
    {
      adult: false,
      backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
      genre_ids: [28, 12, 878],
      id: 63432649,
      original_language: 'en',
      original_title: 'Spider-Man: No Way Home',
      overview:
        'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      popularity: 27352.884,
      poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      release_date: '2021-12-15',
      title: 'Spider-Man: No Way Home',
      video: false,
      vote_average: 8.4,
      vote_count: 6580,
    },
  ];
  const [modelVisiable, setModelVisiable] = useState(false);
  return (
    <ScrollView style={styles.container}>
      {/* <Modal
        animationType={'slide'}
        transparent={false}
        visible={modelVisiable}>
        <Text
          style={styles.closeText}
          onPress={() => {
            setModelVisiable(false);
          }}>
          Close Modal
        </Text>
      </Modal>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>My Movies</Text>
        <TouchableOpacity onPress={() => setModelVisiable(true)}>
          <Icon
            name="add"
            size={25}
            color="#90cea1"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      </View>
      <MovieCarousel
        movies={myMovie}
        loading={true}
        navigateToMovie={data =>
          navigation.navigate('MovieDetail', {movie: data})
        }
      /> */}
      <View style={styles.containerTitle}>
        <Text style={styles.title}>All Movies</Text>
      </View>
      <DiscoverCarousel
        navigateToMovie={data =>
          navigation.navigate('MovieDetail', {movie: data})
        }
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modelContainer: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  },
});
