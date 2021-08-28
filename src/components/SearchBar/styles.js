// SearchInput styles
// Author: Caio Franco
// Created at 02/12/20

import styled from 'styled-components/native';
import * as Theme from '../../common/theme';

export const Container = styled.View({
  width: '100%',
  height: Theme.Sizes.fourtyEight,
  justifyContent: 'center',
  alignItems: 'center',
});

export const Content = styled.View({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  height: Theme.Sizes.fourtyEight,
  backgroundColor: Theme.Colors.white,
});

export const InputField = styled.TextInput.attrs({
  autoCapitalize: 'words',
  autoCompleteType: 'off',
  autoCorrect: false,
  maxLength: 26,
  multiline: false,
})({
  width: '90%',
  paddingLeft: Theme.Sizes.twelve,
  paddingRight: Theme.Sizes.twelve,
  fontFamily: 'NeoSansStd-Regular',
  fontSize: Theme.FontSize.h2,
});
