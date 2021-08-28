// StoresCell.js
// Author: Caio Franco
// Created at 05/08/21

import React from 'react';
import Text from '../Text';
import PropTypes from 'prop-types';
import icons from '../../common/icons';
import StarRating from '../StarRating';
import * as Theme from '../../common/theme';
import {Container, TextView, Image} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function StoresCell(props) {
  const {item, onPress} = props;

  return (
    <Container onPress={() => onPress(item)}>
      <Image source={{uri: item.image}} />
      <TextView>
        <Text h1 bold>
          {item.name}
        </Text>
        <Text h4 grayDark>
          {item.city + ', ' + item.uf}
        </Text>
        <StarRating rating={item.rating} />
      </TextView>
      <Icon
        name={icons.seeDetail}
        size={Theme.Sizes.thirtyTwo}
        color={Theme.Colors.gray}
      />
    </Container>
  );
}

StoresCell.defaultProps = {
  item: {
    image: '',
    name: 'Loja Teste',
    city: 'Uberlândia',
    uf: 'MG',
    rating: 2.34,
  },
  onPress: () => console.debug('StoreCell pressed'),
};

StoresCell.propTypes = {
  item: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  uf: PropTypes.string,
  rating: PropTypes.number,
};
