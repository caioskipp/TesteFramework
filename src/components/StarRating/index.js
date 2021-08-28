// StarRating.js
// Author: Caio Franco
// Created at 06/08/21

import React from 'react';
import Text from '../Text';
import PropTypes from 'prop-types';
import * as Theme from '../../common/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {RatingView, RatingNumberView} from './styles';

export default function StarRating(props) {
  const {rating, ratingNumber} = props;
  // Mark: Lifecycle functions

  // Mark: General functions
  function renderStarRating() {
    let rate = (Math.round(rating * 2) / 2).toFixed(1);
    let integer = Math.trunc(rate);
    let decimals = rate % 1;
    let rest = 5.0 - Math.ceil(rate);

    return (
      <>
        {renderFullStar(integer)}
        {renderHalfStar(decimals)}
        {renderEmptyStar(rest)}
      </>
    );
  }

  function renderFullStar(numberOfStars) {
    let starIcons = [];
    for (let i = 0; i < numberOfStars; i++) {
      starIcons.push(
        <Icon
          key={i + 'fullStar'}
          name={'star'}
          size={12}
          color={Theme.Colors.primary}
        />,
      );
    }
    return starIcons;
  }

  function renderHalfStar(numberOfStars) {
    if (numberOfStars !== 0) {
      return (
        <Icon
          key={'half-star'}
          name={'star-half-sharp'}
          size={12}
          color={Theme.Colors.primary}
        />
      );
    }
  }

  function renderEmptyStar(numberOfStars) {
    let starIcons = [];
    for (let i = 0; i < numberOfStars; i++) {
      starIcons.push(
        <Icon
          key={i + 'emptyStar'}
          name={'star-outline'}
          size={12}
          color={Theme.Colors.primary}
        />,
      );
    }
    return starIcons;
  }

  function renderRatingNumber() {
    if (ratingNumber >= 0) {
      return (
        <RatingNumberView>
          <Text h4 grayDark>
            ({ratingNumber})
          </Text>
        </RatingNumberView>
      );
    }
  }

  return (
    <RatingView>
      {renderStarRating()}
      {renderRatingNumber()}
    </RatingView>
  );
}

StarRating.defaultProps = {
  rating: 0,
  ratingNumber: -1,
};

StarRating.propTypes = {
  rating: PropTypes.number,
  ratingNumber: PropTypes.number,
};
