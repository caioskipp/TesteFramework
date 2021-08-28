// FadeOut.js
// Author: Caio Franco
// Created at 08/12/20

import PropTypes from 'prop-types';
import {Container} from './styles';
import {Animated} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function FadeOut(props) {
  const [fadeOut] = useState(new Animated.Value(1));

  useEffect(() => {
    animate();
  }, []);

  function animate() {
    Animated.timing(fadeOut, {
      toValue: 0,
      delay: props.delay,
      duration: props.duration,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Container
      style={{
        opacity: fadeOut,
      }}>
      {props.children}
    </Container>
  );
}

FadeOut.defaultProps = {
  delay: 300,
  duration: 1600,
};

FadeOut.propTypes = {
  delay: PropTypes.number,
  duration: PropTypes.number,
};
