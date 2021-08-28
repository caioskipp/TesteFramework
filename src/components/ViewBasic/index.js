// ViewBasic.js
// Author: Caio Franco
// Created at 05/09/20

import React from 'react';
import PropTypes from 'prop-types';
import ViewLoading from '../ViewLoading';
import * as Theme from '../../common/theme';
import {Keyboard, Platform} from 'react-native';
import {Container, Content, DismissKeyboard} from './styles';

export default function ViewBasic(props) {
  const renderLoading = () => {
    if (props.isLoading) {
      return <ViewLoading />;
    }
  };

  return (
    <Container
      style={{
        paddingLeft: props.paddingSide ? Theme.defaultSideMargin : 0,
        paddingRight: props.paddingSide ? Theme.defaultSideMargin : 0,
        paddingBottom: props.bottom ? Theme.defaultBottomSpace : 0,
        backgroundColor: props.background,
        ...Platform.select({
          ios: {
            paddingTop: props.margin ? Theme.defaultStatusBarHeight : 0,
          },
          android: {
            paddingTop: 0,
          },
        }),
      }}>
      {renderLoading()}
      <DismissKeyboard onPress={() => Keyboard.dismiss()}>
        <Content>{props.children}</Content>
      </DismissKeyboard>
    </Container>
  );
}

ViewBasic.defaultProps = {
  isLoading: false,
  margin: false,
  bottom: true,
  background: Theme.Colors.background,
  paddingSide: true,
};

ViewBasic.propTypes = {
  isLoading: PropTypes.bool,
  background: PropTypes.string,
  margin: PropTypes.bool,
  bottom: PropTypes.bool,
};
