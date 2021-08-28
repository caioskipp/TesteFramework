import styled from 'styled-components/native';
import * as Theme from '../../../src/common/theme';

export const Container = styled.View({
  width: '100%',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: Theme.navigationBarHeight,
  paddingLeft: Theme.defaultSideMargin,
  paddingRight: Theme.defaultSideMargin,
});

export const IconButton = styled.TouchableOpacity({
  width: 30,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
});

export const Logo = styled.Image({
  width: '40%',
  aspectRatio: 1.0,
  resizeMode: 'contain',
});
