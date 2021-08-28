// Input styles
// Author: Caio Franco
// Created at 07/07/20

import * as Theme from '../../common/theme';
import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

export const Container = styled.View({
  flexDirection: 'column',
  width: '100%',
});

export const Label = styled(Animated.Text)({
  fontFamily: 'NeoSansStd-Regular',
  position: 'absolute',
  left: 0,
});

export const InputField = styled.TextInput({
  borderBottomWidth: StyleSheet.hairlineWidth,
  paddingTop: Theme.Sizes.twelve,
  fontFamily: 'NeoSansStd-Regular',
  height: Theme.Sizes.fourtyEight,
  fontSize: Theme.FontSize.h3,
});
