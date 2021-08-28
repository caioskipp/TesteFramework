// ProductList.js
// Author: Caio Franco
// Created at 27/08/21

import React, {useCallback, useEffect, useState} from 'react';
import {
  Content,
  SearchBarView,
  FlatList,
  Image,
  StoreHeaderView,
} from './styles';
import {
  Text,
  StarRating,
  NavigationBar,
  ViewBasic,
  ProductCellSmall,
} from '../../../../components';
import {Alert} from 'react-native';
import controller from './controller';
import {useDispatch} from 'react-redux';
import icons from '../../../../common/icons';
import Errors from '../../../../common/errors';
import screens from '../../../../common/screens';
import SearchBar from '../../../../components/SearchBar';

export default function ProductList(props) {
  const dispatch = useDispatch();
  const {store} = props.route.params;
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Mark: Lifecycle functions

  useEffect(() => {
    getProducts().then(() => console.debug('Products Loaded'));
  }, [getProducts, props.route.params.data]);

  // Mark: General functions

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const result = await controller.getProducts(store);
      setProducts(result);
      setFilteredProducts(result);
    } catch (err) {
      Alert.alert(Errors.Network.fetchError, err.message);
    } finally {
      setLoading(false);
    }
  }, [store]);

  function renderStoreHeader() {
    return (
      <StoreHeaderView>
        <Text h1 bold>
          {store.name}
        </Text>
        <Text h4 grayDark>
          {store.city + ', ' + store.uf}
        </Text>
        <StarRating rating={store.rating} />
      </StoreHeaderView>
    );
  }

  async function addItemToCart(product) {
    dispatch({type: 'ADD_TO_CART', item: product});
  }

  function searchForEqualNames(text) {
    let productList = products;
    if (!text) {
      setSearchText(text);
      setFilteredProducts(productList);
    } else {
      setSearchText(text);
      setFilteredProducts(
        products.filter(product =>
          new RegExp('.*' + text + '.*').test(product.name),
        ),
      );
    }
  }

  // Mark: Navigation functions

  function goToProductDetail(product) {
    props.navigation.navigate(screens.stores.productDetail, {product: product});
  }

  function goBack() {
    props.navigation.goBack();
  }

  return (
    <Content>
      <NavigationBar
        showLogo
        leftIconPressed={() => goBack()}
        leftIcon={icons.goBack}
      />
      <SearchBarView>
        <SearchBar
          value={searchText}
          onChangeText={text => searchForEqualNames(text)}
        />
      </SearchBarView>
      <Image source={{uri: store.image}} />

      <ViewBasic bottom={false} isLoading={loading}>
        <FlatList
          refreshing={loading}
          data={filteredProducts}
          numColumns={2}
          keyExtractor={item => item.id}
          onRefresh={() => getProducts()}
          renderItem={({item, index}) => {
            return (
              <ProductCellSmall
                item={item}
                onPressButton={() => addItemToCart(item)}
                onPress={() => goToProductDetail(item)}
              />
            );
          }}
          ListHeaderComponent={() => {
            return renderStoreHeader();
          }}
          ListEmptyComponent={() => {
            return (
              <Text h2 center>
                Não há produtos para exibir
              </Text>
            );
          }}
        />
      </ViewBasic>
    </Content>
  );
}

ProductList.defaultProps = {};

ProductList.propTypes = {};
