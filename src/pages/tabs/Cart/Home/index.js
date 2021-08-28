// Home.js
// Author: Caio Franco
// Created at 27/08/21

import React, {useEffect} from 'react';
import {
  ProductCellSmall,
  NavigationBar,
  Text,
  ViewBasic,
  ButtonBackground,
  Separator,
} from '../../../../components';
import strings from './strings';
import {useDispatch, useSelector} from 'react-redux';
import {Content, FlatList} from './styles';
import screens from '../../../../common/screens';

export default function Home(props) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  // Mark: Lifecycle functions

  // Mark: General functions

  async function removeItemFromCart(product) {
    dispatch({type: 'REMOVE_FROM_CART', item: product});
  }

  // Mark: Navigation functions
  function goToCheckout() {
    props.navigation.navigate(screens.PDF);
  }

  return (
    <Content>
      <NavigationBar showLogo />
      <ViewBasic bottom={false}>
        <FlatList
          data={cart}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <ProductCellSmall
                cart
                item={item.item}
                onPressButton={() => removeItemFromCart(item.item)}
              />
            );
          }}
          ListEmptyComponent={() => {
            return (
              <Text h2 center>
                {strings.emptyCart}
              </Text>
            );
          }}
        />
        <Separator />
        <ButtonBackground
          text={'Fazer checkout'}
          isEnabled
          onPress={() => goToCheckout()}
        />
      </ViewBasic>
    </Content>
  );
}

Home.defaultProps = {};

Home.propTypes = {};
