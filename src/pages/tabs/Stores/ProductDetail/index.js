// ProductDetail.js
// Author: Caio Franco
// Created at 27/08/21

import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import icons from '../../../../common/icons';
import {
  NavigationBar,
  ViewBasic,
  Separator,
  Text,
  Counter,
  ButtonBackground,
} from '../../../../components';

import {
  Content,
  ScrollView,
  Container,
  Image,
  Bottom,
  ProductImage,
} from './styles';

export default function ProductDetail(props) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const {product} = props.route.params;
  // Mark: Lifecycle functions

  // Mark: General functions

  function renderprice() {
    if (!product.price) {
      return;
    }

    let priceAux = product.price;
    priceAux = priceAux.toFixed(2);
    priceAux = priceAux.toString();
    priceAux = priceAux.replace('.', ',');
    return priceAux;
  }

  async function addItemToCart() {
    for (let i = 0; i < quantity; i++) {
      dispatch({type: 'ADD_TO_CART', item: product});
    }
    setQuantity(0);
  }

  function addOneToCounter() {
    setQuantity(quantity + 1);
  }

  function removeOneFromCounter() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  // Mark: Navigation functions

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
      <ScrollView>
        <ProductImage>
          <Image source={{uri: product.image}} />
        </ProductImage>
        <Separator />
        <ViewBasic>
          <Container>
            <Text h1 bold>
              {product.name}
            </Text>
            <Text h2 bold primary>
              R$ {renderprice()}
            </Text>
            <Text margin h2>
              {product.description}
            </Text>
            <Counter
              value={quantity}
              title={'Quantidade'}
              onAddButtonPressed={() => addOneToCounter()}
              onRemoveButtonPressed={() => removeOneFromCounter()}
            />
          </Container>

          <Bottom>
            <ButtonBackground
              onPress={() => addItemToCart()}
              isEnabled
              text={'Adicionar ao carrinho'}
            />
          </Bottom>
        </ViewBasic>
      </ScrollView>
    </Content>
  );
}

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};
