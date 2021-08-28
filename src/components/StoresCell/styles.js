// StoresCell styles
// Author: Caio Franco
// Created at 05/08/21

import styled from 'styled-components/native';
import * as Theme from '../../common/theme';

export const Container = styled.TouchableOpacity({
  borderWidth: 1,
  alignItems: 'center',
  flexDirection: 'row',
  padding: Theme.Sizes.eight,
  borderColor: Theme.Colors.gray,
  marginBottom: Theme.Sizes.twelve,
  borderRadius: Theme.defaultBorderRadius,
});

export const TextView = styled.View({
  flex: 1,
  justifyContent: 'center',
  paddingLeft: Theme.Sizes.eight,
});

export const Image = styled.Image({
  resizeMode: 'cover',
  width: Theme.Sizes.sixtyFour,
  height: Theme.Sizes.sixtyFour,
  backgroundColor: Theme.Colors.gray,
  borderRadius: Theme.defaultBorderRadius,
});
