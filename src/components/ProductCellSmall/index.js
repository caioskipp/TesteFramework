// ProductCellSmall.js
// Author: Caio Franco
// Created at 30/06/21

import React from 'react';
import Text from '../Text';
import PropTypes from 'prop-types';
import {Container, ProductImage, Image, Bottom, Button} from './styles';

export default function ProductCellSmall(props) {
  let {item, onPress, onPressButton} = props;

  function renderprice() {
    if (!item.price) {
      return;
    }

    let priceAux = item.price;
    priceAux = priceAux.toFixed(2);
    priceAux = priceAux.toString();
    priceAux = priceAux.replace('.', ',');
    return priceAux;
  }

  return (
    <Container onPress={() => onPress()}>
      <ProductImage>
        <Image source={{uri: item.image}} />
      </ProductImage>
      <Text h3 grayDark>
        {item.name}
      </Text>
      <Bottom>
        <Text h2 bold>
          R$ {renderprice()}
        </Text>
        <Button onPress={() => onPressButton()}>
          <Text h2 white>
            {props.cart ? 'Remover' : 'Adicionar'}
          </Text>
        </Button>
      </Bottom>
    </Container>
  );
}

ProductCellSmall.defaultProps = {
  item: {
    name: 'Nome do Produto',
    price: 1.5,
    image: [],
  },
  cart: false,
  onPress: () => console.debug('ProductCellSmall Pressed'),
  onPressButton: () => console.debug('onPressButton Pressed'),
};

ProductCellSmall.propTypes = {
  item: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  cart: PropTypes.bool,
  onPress: PropTypes.func,
  onPressButton: PropTypes.func,
};
