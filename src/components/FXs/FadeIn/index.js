// FadeIn.js
// Author: Caio Franco
// Created at 04/10/20

import PropTypes from 'prop-types';
import {Container} from './styles';
import {Animated} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function FadeIn(props) {
  const [fadeIn] = useState(new Animated.Value(0));

  useEffect(() => {
    animate();
  }, []);

  function animate() {
    Animated.timing(fadeIn, {
      toValue: 1,
      delay: props.delay,
      duration: props.duration,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Container
      style={{
        opacity: fadeIn,
      }}>
      {props.children}
    </Container>
  );
}

FadeIn.defaultProps = {
  delay: 300,
  duration: 1600,
};

FadeIn.propTypes = {
  delay: PropTypes.number,
  duration: PropTypes.number,
};
