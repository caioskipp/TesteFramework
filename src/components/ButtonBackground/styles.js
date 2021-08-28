// ButtonBackground styles
// Author: Caio Franco
// Created at 06/09/20

import styled from 'styled-components/native';
import * as Theme from '../../../src/common/theme';

export const Container = styled.TouchableOpacity({
  width: '100%',
  height: Theme.Sizes.fourtyEight,
  justifyContent: 'center',
  borderRadius: Theme.defaultBorderRadius,
  backgroundColor: Theme.Colors.primary,
});
