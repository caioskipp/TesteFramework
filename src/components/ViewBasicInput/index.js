// ViewBasicInput.js
// Author: Caio Franco
// Created at 08/09/20

import React from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';
import * as Theme from '../../common/theme';
import {KeyboardAvoiding, ScrollView} from './styles';

export default function ViewBasicInput(props) {
  const {offsetiOS, offsetAndroid} = props;

  return (
    <KeyboardAvoiding
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.select({
        ios: offsetiOS,
        android: offsetAndroid,
      })}>
      <ScrollView>{props.children}</ScrollView>
    </KeyboardAvoiding>
  );
}

ViewBasicInput.defaultProps = {
  flex: 1,
  background: Theme.Colors.background,
  offsetiOS: -150,
  offsetAndroid: -100,
};

ViewBasicInput.propTypes = {
  flex: PropTypes.number,
  background: PropTypes.string,
  offsetiOS: PropTypes.number,
  offsetAndroid: PropTypes.number,
};
