// ViewLoading styles
// Author: Caio Franco
// Created at 08/07/20

import * as Theme from '../../common/theme';
import styled from 'styled-components/native';

export const Container = styled.View({
  position: 'absolute',
  zIndex: 5,
  background: Theme.Colors.blackOpacity,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center',
});

export const LoadingCircle = styled.ActivityIndicator({});
