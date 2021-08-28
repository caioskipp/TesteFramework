// ViewLoading.js
// Author: Caio Franco
// Created at 08/07/20

import React from 'react';
import * as Theme from '../../common/theme';
import {Container, LoadingCircle} from './styles';

export default function ViewLoading(props) {
  return (
    <Container>
      <LoadingCircle color={Theme.Colors.primary} size={'large'} />
    </Container>
  );
}
