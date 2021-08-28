// Counter.js
// Author: Caio Franco
// Created at 30/06/21

import React from 'react';
import Text from '../Text';
import PropTypes from 'prop-types';
import {Content, Container, AddButton, RemoveButton} from './styles';

export default function Counter(props) {
  let {onRemoveButtonPressed, onAddButtonPressed, value, title, marginTop} =
    props;

  return (
    <Content style={{marginTop: marginTop}}>
      <Text h2 bold>
        {title}
      </Text>

      <Container>
        <RemoveButton onPress={onRemoveButtonPressed}>
          <Text h0 bold grayDark>
            -
          </Text>
        </RemoveButton>
        <Text h2 bold>
          {value}
        </Text>
        <AddButton onPress={onAddButtonPressed}>
          <Text h0 bold primary>
            +
          </Text>
        </AddButton>
      </Container>
    </Content>
  );
}

Counter.defaultProps = {
  value: 0,
  marginTop: 0,
  title: 'Counter',
  onAddButtonPressed: () => console.debug(''),
  onRemoveButtonPressed: () => console.debug(''),
};

Counter.propTypes = {
  value: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string,
  onAddButtonPressed: PropTypes.func,
  onRemoveButtonPressed: PropTypes.func,
};
