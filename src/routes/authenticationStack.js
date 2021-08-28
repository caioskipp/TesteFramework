import React from 'react';
import screens from '../common/screens';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/authentication/Home';

const authentication = createStackNavigator();
export default function authenticationStack() {
  return (
    <authentication.Navigator
      initialRouteName={screens.authentication.home}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <authentication.Screen
        name={screens.authentication.home}
        component={Home}
      />
    </authentication.Navigator>
  );
}
