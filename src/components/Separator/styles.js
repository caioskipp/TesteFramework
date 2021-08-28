// Separator styles
// Author: Caio Franco
// Created at 06/08/21

import styled from 'styled-components/native';
import * as Theme from '../../common/theme';

export const Container = styled.View({
  width: '100%',
});

export const Line = styled.View({
  height: 1,
  width: '100%',
  backgroundColor: Theme.Colors.primary,
});
