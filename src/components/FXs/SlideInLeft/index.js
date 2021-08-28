// SlideInLeft.js
// Author: Caio Franco
// Created at 12/10/20

import {Container} from './styles';
import PropTypes from 'prop-types';
import {Animated, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function SlideInLeft(props) {
  const windowWidth = Dimensions.get('window').width;
  const [slideIn] = useState(new Animated.Value(-windowWidth * 2));

  useEffect(() => {
    animate();
  }, []);

  function animate() {
    Animated.spring(slideIn, {
      toValue: 0,
      friction: 12,
      delay: props.delay + props.index * 50,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Container
      style={{
        transform: [
          {
            translateX: slideIn,
          },
        ],
      }}>
      {props.children}
    </Container>
  );
}

SlideInLeft.defaultProps = {
  index: 0,
  delay: 300,
};

SlideInLeft.propTypes = {
  index: PropTypes.number,
  delay: PropTypes.number,
};
