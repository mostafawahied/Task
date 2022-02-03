import React, {useState} from 'react';
import {View, StyleSheet, Text, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import DiscoverCarousel from '../component/discover/discover-carousel';
import MovieCarousel from '../component/movie/movie-carousel';
import AddMovie from '../component/movie/addMovie';

const HomeScreen = ({navigation}) => {
  const [myMovie, setMyMovie] = React.useState([]);
  console.log(myMovie);
  const MyMovieList = () => {
    return myMovie.length !== 0 ? (
      <MovieCarousel
        movies={myMovie}
        loading={true}
        local={true}
        navigateToMovie={data =>
          navigation.navigate('MovieDetail', {movie: data})
        }
      />
    ) : (
      <View style={styles.noMovieContainer}>
        <Text style={styles.title}>No movie added</Text>
      </View>
    );
  };

  const [modelVisiable, setModelVisiable] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        transparent={false}
        visible={modelVisiable}
        onRequestClose={() => setModelVisiable(false)}>
        <AddMovie
          setMyMovies={data => setMyMovie(data)}
          closeModel={() => setModelVisiable(false)}
          myMovie={myMovie}
        />
      </Modal>

      <View style={styles.containerTitle}>
        <Text style={styles.title}>My Movies</Text>
        <TouchableOpacity onPress={() => setModelVisiable(true)}>
          <Icon
            name="add-circle-outline"
            size={25}
            color="#90cea1"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      </View>
      <MyMovieList />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>All Movies</Text>
      </View>
      <DiscoverCarousel
        navigateToMovie={data =>
          navigation.navigate('MovieDetail', {movie: data})
        }
      />
    </View>
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
    justifyContent: 'center',
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
  addButton: {
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

    paddingHorizontal: 20,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0d253f',
    shadowColor: '#0d253f',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
    paddingHorizontal: 20,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  noMovieContainer: {
    flex: 0.2,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 30,
    overflow: 'hidden',
    maxWidth: '100%',
  },
});
