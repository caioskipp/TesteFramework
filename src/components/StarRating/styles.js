// StarRating styles
// Author: Caio Franco
// Created at 06/08/21

import styled from 'styled-components/native';
import * as Theme from '../../common/theme';

export const RatingView = styled.View({
  paddingTop: 4,
  alignItems: 'center',
  flexDirection: 'row',
});

export const RatingNumberView = styled.View({
  justifyContent: 'center',
  paddingBottom: 4,
  marginLeft: Theme.Sizes.four,
});
