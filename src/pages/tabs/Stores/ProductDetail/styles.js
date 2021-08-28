// ProductDetail styles
// Author: Caio Franco
// Created at 27/08/21

import styled from 'styled-components/native';
import * as Theme from '../../../../common/theme';
import {Platform} from 'react-native';

export const Content = styled.View({
  flex: 1,
  width: '100%',
  ...Platform.select({
    ios: {
      paddingTop: Theme.defaultStatusBarHeight,
    },
    android: {
      paddingTop: 0,
    },
  }),
  backgroundColor: Theme.Colors.primary,
});

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    width: '100%',
    flex: 1,
  },
})({
  flex: 1,
  backgroundColor: Theme.Colors.background,
});

export const ProductImage = styled.View({
  width: '100%',
  height: 200,
});

export const Image = styled.Image({
  width: '100%',
  height: '100%',
  resizeMode: 'contain',
});

export const Container = styled.View({
  flex: 1,
});

export const Bottom = styled.View({
  justifyContent: 'flex-end',
  paddingTop: Theme.Sizes.twelve,
  paddingBottom: Theme.Sizes.twelve,
});
