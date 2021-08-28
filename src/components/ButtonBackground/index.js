// ButtonBackground.js
// Author: Caio Franco
// Created at 06/09/20

import React from 'react';
import Text from '../Text';
import {Container} from './styles';
import PropTypes from 'prop-types';
import * as Theme from '../../common/theme';

export default function ButtonBackground(props) {
  let {onPress, isEnabled, margin, text} = props;

  return (
    <Container
      onPress={onPress}
      disabled={!isEnabled}
      style={{
        backgroundColor: Theme.Colors.white,
        marginTop: margin ? Theme.Sizes.eight : 0,
        marginBottom: margin ? Theme.Sizes.eight : 0,
      }}>
      <Text center h1 style={{color: Theme.Colors.primary}}>
        {text}
      </Text>
    </Container>
  );
}

ButtonBackground.defaultProps = {
  onPress: () => console.debug('ButtonBackground Clicked'),
  text: 'Button name',
  isEnabled: false,
  margin: false,
};

ButtonBackground.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  isEnabled: PropTypes.bool,
  margin: PropTypes.bool,
};
