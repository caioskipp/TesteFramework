/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Routes from './src/routes/routes';
import {Provider} from 'react-redux';
import store from './src/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </Provider>
  );
};

export default App;
