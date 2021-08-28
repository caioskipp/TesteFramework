// Home styles
// Author: Caio Franco
// Created at 27/08/21

import {Platform} from 'react-native';
import styled from 'styled-components/native';
import * as Theme from '../../../common/theme';

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

export const MidContent = styled.View({
  flex: 1,
  justifyContent: 'center',
});

export const LogoView = styled.View({
  width: '100%',
  alignItems: 'center',
});

export const Logo = styled.Image({
  width: '50%',
  minWidth: 100,
  resizeMode: 'contain',
});
