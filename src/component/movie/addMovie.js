/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {Button} from 'react-native-elements/dist/buttons/Button';
import {launchImageLibrary} from 'react-native-image-picker';
import Moment from 'moment';

const AddMovie = ({closeModel}) => {
  const [movieName, onChangeMovieName] = React.useState();
  const [movieOverview, onChangeMovieOverview] = React.useState();
  const [movieDate, onChangeMovieDate] = React.useState(new Date());
  const [filePath, setFilePath] = React.useState();
  const [fileData, setFileData] = React.useState();
  const [fileUri, setFileUri] = React.useState();

  onSubmit = () => {
    if (movieName) {
      if (movieName.length < 2) {
        Alert.alert('Alert', 'Movie name must be minimum 2 characters');
        return;
      }
    } else {
      Alert.alert('Alert', 'you must type a movie name');
      return;
    }
    if (movieOverview) {
      if (movieOverview.length < 10) {
        Alert.alert('Alert', 'Movie overview must be minimum 10 characters');
        return;
      }
    } else {
      Alert.alert('Alert', 'you must type a movie overview');
      return;
    }
    if (movieDate) {
      console.log(movieDate);
    } else {
      Alert.alert('Alert', 'you must enter a movie date');
      return;
    }
    if (fileUri) {
      console.log(fileUri);
    }
    let movie = {
      poster_path: fileUri,
      original_title: movieName,
      overview: movieOverview,
      release_date: Moment(movieDate).format('yyyy-MM-DD'), //2021-12-15
    };
    console.log(movie);
    //closeModel();
  };

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert(response.customButton);
      } else {
        console.log('response', JSON.stringify(response));
        setFilePath(response);
        setFileData(response.data);
        setFileUri(response.assets[0].uri);
        console.log(response.assets[0].uri);
      }
    });
  };

  renderFileUri = () => {
    if (fileUri) {
      return <Image source={{uri: fileUri}} style={styles.images} />;
    } else {
      <Text> no image</Text>;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      style={styles.modelContainer}>
      <Text style={styles.title}>Add Movie</Text>
      <View style={styles.space} />

      <Text style={styles.text}>Movie Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeMovieName}
        value={movieName}
        placeholder="Movie Name"
      />
      <View style={styles.space} />
      <Text style={styles.text}>Movie Overview</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeMovieOverview}
        value={movieOverview}
        placeholder="Movie Name"
      />

      <View style={styles.space} />
      <Text style={styles.text}>Movie Date</Text>
      <DatePicker
        mode="date"
        date={movieDate}
        onDateChange={onChangeMovieDate}
      />
      <View style={styles.space} />
      <Text style={styles.text}>Movie Poster</Text>

      <TouchableOpacity
        onPress={fileUri ? null : this.chooseImage}
        disabled={fileUri}
        style={styles.btnSection}>
        <Text style={styles.btnText}>Choose File</Text>
      </TouchableOpacity>
      <View>{this.renderFileUri()}</View>

      <View style={styles.space} />
      <View style={styles.containerTitle}>
        <Button
          onPress={closeModel}
          style={styles.closeButton}
          title="Close"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={styles.space} />
        <Button
          onPress={() => this.onSubmit()}
          style={styles.addButton}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </ScrollView>
  );
};

export default AddMovie;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 10,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: '#2AC062',
    fontSize: 30,
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

    width: '100%',
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
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
});
