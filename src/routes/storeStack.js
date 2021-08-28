import React from 'react';
import screens from '../common/screens';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/tabs/Stores/Home';
import ProductList from '../pages/tabs/Stores/ProductList';
import ProductDetail from '../pages/tabs/Stores/ProductDetail';

const store = createStackNavigator();
export default function storeStack() {
  return (
    <store.Navigator
      initialRouteName={screens.stores.home}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <store.Screen name={screens.stores.home} component={Home} />
      <store.Screen name={screens.stores.productList} component={ProductList} />
      <store.Screen
        name={screens.stores.productDetail}
        component={ProductDetail}
      />
    </store.Navigator>
  );
}
