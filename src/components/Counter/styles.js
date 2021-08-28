// Counter styles
// Author: Caio Franco
// Created at 30/06/21

import styled from 'styled-components/native';
import * as Theme from '../../common/theme';

export const Content = styled.View({
  width: '100%',
  height: 32,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Container = styled.View({
  width: 100,
  height: 32,
  borderWidth: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderColor: Theme.Colors.gray,
  borderRadius: Theme.defaultBorderRadius,
});

export const AddButton = styled.TouchableOpacity({
  width: 28,
  height: 28,
  alignItems: 'center',
  justifyContent: 'center',
});

export const RemoveButton = styled.TouchableOpacity({
  width: 28,
  height: 28,
  alignItems: 'center',
  justifyContent: 'center',
});
