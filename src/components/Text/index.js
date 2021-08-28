// Text.js
// Author: Caio Franco
// Created at 06/09/20

import {Text} from './styles';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import * as Theme from '../../common/theme';

export default class H4Text extends Component {
  render() {
    const {
      // Sizes
      h0,
      h1,
      h2,
      h3,
      h4,
      // Alignment
      center,
      right,
      // Font Weight
      bold,
      light,
      // Colors
      color,
      primary,
      secondary,
      black,
      white,
      gray,
      grayDark,
      red,
      green,
      // Margin
      margin,
      style,
      children,
      ...props
    } = this.props;
    const textStyles = [
      h0 && styles.h0,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      h4 && styles.h4,
      center && styles.center,
      right && styles.right,
      margin && styles.margin,
      bold && styles.bold,
      light && styles.light,
      primary && styles.primary,
      secondary && styles.secondary,
      black && styles.black,
      white && styles.white,
      grayDark && styles.grayDark,
      gray && styles.gray,
      red && styles.red,
      green && styles.green,
      color && styles[color],
      color && !styles[color] && {color},
      style,
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // Sizes
  h0: {fontSize: Theme.FontSize.h0},
  h1: {fontSize: Theme.FontSize.h1},
  h2: {fontSize: Theme.FontSize.h2},
  h3: {fontSize: Theme.FontSize.h3},
  h4: {fontSize: Theme.FontSize.h4},
  // Position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // Weight
  bold: {fontFamily: 'NeoSansStd-Bold'},
  light: {fontFamily: 'NeoSansStd-Light'},
  // Colors
  primary: {color: Theme.Colors.primary},
  secondary: {color: Theme.Colors.secondary},
  black: {color: Theme.Colors.black},
  white: {color: Theme.Colors.white},
  grayDark: {color: Theme.Colors.grayDark},
  gray: {color: Theme.Colors.gray},
  red: {color: Theme.Colors.red},
  green: {color: Theme.Colors.green},
  // Margins
  margin: {marginTop: Theme.Sizes.eight, marginBottom: Theme.Sizes.eight},
});
