import React from 'react';
import icons from '../common/icons';
import screens from '../common/screens';
import {useSelector} from 'react-redux';
import * as Theme from '../common/theme';
import IconiOS from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import storeStack from './storeStack';
import cartStack from './cartStack';

const tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  const cart = useSelector(state => state.cart);

  return (
    <tab.Navigator
      initialRouteName={screens.tabs.stores}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        tabBarActiveTintColor: Theme.Colors.secondary,
        tabBarInactiveTintColor: Theme.Colors.white,
        tabBarStyle: {
          backgroundColor: Theme.Colors.primary,
        },
        tabBarLabelStyle: {
          fontFamily: 'NeoSansStd-Regular',
          fontSize: Theme.FontSize.h3,
        },
      }}>
      <tab.Screen
        options={{
          tabBarLabel: 'Lojas',
          tabBarIcon: ({focused}) => (
            <IconiOS
              name={icons.stores}
              size={Theme.Sizes.twenty}
              color={focused ? Theme.Colors.secondary : Theme.Colors.white}
            />
          ),
        }}
        name={screens.tabs.stores}
        component={storeStack}
      />
      <tab.Screen
        options={{
          tabBarBadge: cart.length === 0 ? null : cart.length,
          tabBarBadgeStyle: {
            backgroundColor: Theme.Colors.secondary,
          },
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({focused}) => (
            <IconiOS
              name={icons.cart}
              size={Theme.Sizes.twenty}
              color={focused ? Theme.Colors.secondary : Theme.Colors.white}
            />
          ),
        }}
        name={screens.tabs.cart}
        component={cartStack}
      />
    </tab.Navigator>
  );
}
