import React from 'react';
import screens from '../common/screens';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/tabs/Cart/Home';

const cart = createStackNavigator();
export default function cartStack() {
  return (
    <cart.Navigator
      initialRouteName={screens.cart.home}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <cart.Screen name={screens.cart.home} component={Home} />
    </cart.Navigator>
  );
}
