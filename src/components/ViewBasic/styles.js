// ViewBasic styles
// Author: Caio Franco
// Created at 05/09/20

import * as Theme from '../../common/theme';
import styled from 'styled-components/native';

export const Container = styled.View({
  flex: 1,
  width: '100%',
});

export const DismissKeyboard = styled.TouchableWithoutFeedback({
  flex: 1,
  width: '100%',
});

export const Content = styled.View({
  flex: 1,
  marginTop: Theme.Sizes.twelve,
  width: '100%',
});
