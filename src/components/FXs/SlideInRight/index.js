// SlideInRight.js
// Author: Caio Franco
// Created at 09/12/20

import {Container} from './styles';
import PropTypes from 'prop-types';
import React, {useState, useEffect, useCallback} from 'react';
import {Animated, Dimensions} from 'react-native';

export default function SlideInRight(props) {
  const windowWidth = Dimensions.get('window').width;
  const [slideIn] = useState(new Animated.Value(windowWidth * 2));

  useEffect(() => {
    animate();
  }, [animate]);

  const animate = useCallback(() => {
    Animated.spring(slideIn, {
      toValue: 0,
      friction: 12,
      delay: props.delay + props.index * 50,
      useNativeDriver: true,
    }).start();
  }, [props.delay, props.index, slideIn]);

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

SlideInRight.defaultProps = {
  index: 0,
  delay: 300,
};

SlideInRight.propTypes = {
  index: PropTypes.number,
  delay: PropTypes.number,
};
