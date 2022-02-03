import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/home';
import MovieDetail from './screens/movie-detail';

import GlobalContextProvider from './context/global';

import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();
const App = ({navigation}) => {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TMDB"
            component={HomeScreen}
            options={{
              ...headerOptions,
            }}
          />

          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{
              ...headerOptions,
              headerTitleContainerStyle: {
                display: 'none',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
};

export default App;

const headerOptions = {
  animationEnabled: false,
  headerTitleStyle: {
    color: '#90cea1',
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  headerStyle: {backgroundColor: '#0d253f', borderBottomColor: 'none'},
};
