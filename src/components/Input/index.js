// Input.js
// Author: Caio Franco
// Created at 07/07/20

import PropTypes from 'prop-types';
import {Animated} from 'react-native';
import React, {useState} from 'react';
import * as Theme from '../../common/theme';
import {Container, InputField, Label} from './styles';

export default function Input(props) {
  let animatedValue;
  if (props.forceFocus) {
    animatedValue = new Animated.Value(0);
  } else {
    animatedValue = new Animated.Value(1);
  }

  const [focused] = useState(animatedValue);

  if (props.value.length !== 0) {
    campoSelecionado();
  }

  function campoSelecionado() {
    Animated.timing(focused, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  function campoDesselecionado() {
    if (props.value.length === 0) {
      Animated.timing(focused, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }

  return (
    <Container style={{marginTop: props.margin}}>
      <Label
        style={{
          top: focused.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 24],
          }),
          fontSize: focused.interpolate({
            inputRange: [0, 1],
            outputRange: [12, 16],
          }),
          color: props.color,
        }}>
        {props.title}
      </Label>
      <InputField
        style={{
          fontFamily: props.bold ? 'NeoSansStd-Bold' : 'NeoSansStd-Regular',
          color: props.fontColor,
          borderBottomColor: props.color,
          fontSize: Theme.FontSize.h1,
        }}
        spellCheck={false}
        value={props.value}
        autoCorrect={false}
        editable={props.editable}
        autoFocus={props.autoFocus}
        maxLength={props.maxLength}
        selectionColor={props.color}
        keyboardType={props.keyboard}
        secureTextEntry={props.secure}
        onFocus={() => campoSelecionado()}
        onBlur={() => campoDesselecionado()}
        autoCapitalize={props.autoCapitalize}
        onEndEditing={text => props.onEndEditing(text)}
        onChangeText={text => props.onChangeText(text)}
      />
    </Container>
  );
}

Input.defaultProps = {
  value: '',
  margin: 12,
  maxLenght: 99,
  secure: false,
  editable: true,
  autoFocus: false,
  forceFocus: false,
  title: 'Nome do Campo',
  autoCapitalize: 'words',
  color: Theme.Colors.white,
  fontSize: Theme.FontSize.h3,
  fontColor: Theme.Colors.white,
  onChangeText: () => console.debug(''),
  onEndEditing: () => console.debug(''),
};

Input.propTypes = {
  secure: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  color: PropTypes.string,
  editable: PropTypes.bool,
  margin: PropTypes.number,
  autoFocus: PropTypes.bool,
  keyboard: PropTypes.string,
  forceFocus: PropTypes.bool,
  maxLenght: PropTypes.number,
  onChangeText: PropTypes.func,
  onEndEditing: PropTypes.func,
  autoCapitalize: PropTypes.string,
};
