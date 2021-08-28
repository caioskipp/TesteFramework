// ViewBasicInput styles
// Author: Caio Franco
// Created at 08/09/20

import styled from 'styled-components/native';

export const KeyboardAvoiding = styled.KeyboardAvoidingView.attrs({})({
  flex: 1,
  width: '100%',
});

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
    width: '100%',
  },
})({});
