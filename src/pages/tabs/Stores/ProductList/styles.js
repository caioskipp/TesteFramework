// ProductList styles
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

export const SearchBarView = styled.View({
  backgroundColor: Theme.Colors.primary,
  padding: Theme.Sizes.twelve,
});

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,

  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
})({});

export const StoreHeaderView = styled.View({
  paddingBottom: Theme.Sizes.twenty,
});

export const Image = styled.Image({
  height: 152,
  width: '100%',
  resizeMode: 'cover',
  backgroundColor: Theme.Colors.gray,
});
