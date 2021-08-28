// NavigationBar.js
// Author: Caio Franco
// Created at 07/07/20

import React from 'react';
import PropTypes from 'prop-types';
import images from '../../../src/assets';
import Text from '../../../src/components/Text';
import * as Theme from '../../../src/common/theme';
import {Container, IconButton, Logo} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NavigationBar(props) {
  const renderLeftButton = () => {
    if (props.leftIcon.length !== 0) {
      return (
        <Icon
          name={props.leftIcon}
          size={Theme.Sizes.thirtySix}
          color={Theme.Colors.white}
        />
      );
    }
  };

  const renderRightButton = () => {
    if (props.rightIcon.length !== 0) {
      return (
        <Icon
          name={props.rightIcon}
          size={Theme.Sizes.thirtyTwo}
          color={Theme.Colors.white}
        />
      );
    }
  };

  const renderCenteredContent = () => {
    if (props.showLogo) {
      return <Logo source={images.logoWhite} />;
    } else {
      return (
        <Text h1 color={Theme.Colors.black}>
          {props.title}
        </Text>
      );
    }
  };

  return (
    <Container style={{backgroundColor: props.backgroundColor}}>
      <IconButton onPress={props.leftIconPressed}>
        {renderLeftButton()}
      </IconButton>
      {renderCenteredContent()}
      <IconButton onPress={props.rightIconPressed}>
        {renderRightButton()}
      </IconButton>
    </Container>
  );
}

NavigationBar.defaultProps = {
  leftIcon: '',
  leftIconPressed: () => console.debug('Função do botão esquerdo'),
  showLogo: false,
  title: 'Title',
  rightIcon: '',
  rightIconPressed: () => console.debug('Função do botão direito'),
  backgroundColor: Theme.Colors.primary,
};

NavigationBar.propTypes = {
  leftIcon: PropTypes.string,
  leftIconPressed: PropTypes.func,
  rightIcon: PropTypes.string,
  rightIconPressed: PropTypes.func,
};
