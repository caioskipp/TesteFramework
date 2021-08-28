import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import screens from '../common/screens';
import {StatusBar} from 'react-native';
import React from 'react';

import authenticationStack from './authenticationStack';
import navigationTabs from './navigationTabs';
import PDF from '../pages/PDF';

const App = createStackNavigator();
export default function mainStack(props) {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <App.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName={screens.authentication.stack}>
        <App.Screen
          name={screens.authentication.stack}
          component={authenticationStack}
        />
        <App.Screen
          name={screens.tabs.tabNavigator}
          component={navigationTabs}
        />
        <App.Screen name={screens.PDF} component={PDF} />
      </App.Navigator>
    </NavigationContainer>
  );
}
