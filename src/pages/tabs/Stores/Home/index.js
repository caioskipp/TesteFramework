// Home.js
// Author: Caio Franco
// Created at 27/08/21

import {
  NavigationBar,
  SlideInRight,
  StoresCell,
  Text,
  ViewBasic,
} from '../../../../components';
import strings from './strings';
import {Alert} from 'react-native';
import controller from './controller';
import errors from '../../../../common/errors';
import React, {useState, useEffect} from 'react';
import {Content, FlatList} from './styles';
import screens from '../../../../common/screens';

export default function Home(props) {
  const [loading, setLoading] = useState(false);
  const [stores, setStores] = useState([]);

  // Mark: Lifecycle functions
  useEffect(() => {
    getStores().then(() => console.debug('Stores Loaded'));
  }, []);

  // Mark: General functions

  async function getStores() {
    setStores([]);
    try {
      setLoading(true);
      const result = await controller.getStores();
      setStores(result);
    } catch (err) {
      Alert.alert(errors.fetchError, err.message);
    } finally {
      setLoading(false);
    }
  }

  // Mark: Navigation functions

  function goToProductList(item) {
    props.navigation.navigate(screens.stores.productList, {store: item});
  }

  return (
    <Content>
      <NavigationBar showLogo />
      <ViewBasic isLoading={loading}>
        <FlatList
          refreshing={loading}
          data={stores}
          keyExtractor={item => item.id}
          onRefresh={() => getStores()}
          renderItem={({item, index}) => {
            return (
              <SlideInRight index={index + 1}>
                <StoresCell
                  item={item}
                  onPress={store => goToProductList(store)}
                />
              </SlideInRight>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <SlideInRight>
                <Text h2 margin>
                  {strings.title}
                </Text>
              </SlideInRight>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <Text h2 center margin>
                {strings.emptyList}
              </Text>
            );
          }}
        />
      </ViewBasic>
    </Content>
  );
}
