/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ScreenHeader = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#01b4e4',
          justifyContent: 'center',
          paddingVertical: 20,
        }}>
        <Text>TMDB</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddMovie')}>
          <Icon
            name="add"
            size={25}
            color="#90cea1"
            style={{alignSelf: 'flex-end'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenHeader;
