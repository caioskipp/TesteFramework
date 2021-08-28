// Separator.js
// Author: Caio Franco
// Created at 06/08/21

import React from 'react';
import PropTypes from 'prop-types';
import {Container, Line} from './styles';
import * as Theme from '../../common/theme';

export default function Separator(props) {
  const {marginBottom, Color} = props;

  return (
    <Container style={{marginBottom: marginBottom}}>
      <Line style={{backgroundColor: Color}} />
    </Container>
  );
}

Separator.defaultProps = {
  Color: Theme.Colors.primary,
  marginBottom: Theme.Sizes.eight,
};

Separator.propTypes = {
  color: PropTypes.string,
  marginBottom: PropTypes.string,
};
