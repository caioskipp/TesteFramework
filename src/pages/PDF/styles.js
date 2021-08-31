// PDf styles
// Author: Caio Franco
// Created at 27/08/21

import styled from 'styled-components/native';
import * as Theme from '../../common/theme';
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

export const PDFViewer = styled.View({
  flex: 1,
  backgroundColor: Theme.Colors.background,
});
