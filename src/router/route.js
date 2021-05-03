import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import google from '../screens/google/index';
import fb from '../screens/fb/index';
import Common from '../screens/common';
const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Common">
        <Stack.Screen name="Common" component={Common} />
        <Stack.Screen name="google" component={google} />
        <Stack.Screen name="fb" component={fb} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
