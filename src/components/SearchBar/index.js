// SearchBar.js
// Author: Caio Franco
// Created at 02/12/20

import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content, InputField} from './styles';
import * as Theme from '../../common/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from '../../common/icons';

export default function SearchBar(props) {
  return (
    <Container>
      <Content>
        <InputField
          onChangeText={props.onChangeText}
          value={props.value}
          placeholder={props.placeholder}
        />
        <Icon
          name={Icons.search}
          color={Theme.Colors.gray}
          size={Theme.Sizes.twentyEight}
        />
      </Content>
    </Container>
  );
}

SearchBar.defaultProps = {
  value: '',
  onChangeText: () => {
    console.debug('Inserir ação');
  },
  placeholder: 'Buscar por...',
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
};
