// ProductCellSmall styles
// Author: Caio Franco
// Created at 30/06/21

import styled from 'styled-components/native';
import * as Theme from '../../common/theme';

export const Container = styled.TouchableOpacity({
  width: '48%',
  borderWidth: 1,
  borderColor: Theme.Colors.gray,
  marginBottom: Theme.Sizes.twelve,
  borderRadius: Theme.defaultBorderRadius,
  padding: 8,
});

export const Image = styled.Image({
  width: '100%',
  height: '100%',
  resizeMode: 'contain',
});

export const Bottom = styled.View({
  height: 60,
  justifyContent: 'space-between',
});

export const ProductImage = styled.View({
  width: 156,
  height: 132,
});

export const Button = styled.TouchableOpacity({
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Theme.Colors.primary,
  borderRadius: Theme.defaultBorderRadius,
});
