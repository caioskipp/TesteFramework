import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

const Colors = {
  // Common
  background: '#FFFFFF',
  // Brand Colors
  primary: '#7531eb',
  secondary: '#F89D52',
  // Neutrals
  clear: 'transparent',
  white: '#fff',
  gray: '#d6d6d6',
  grayDark: '#666666',
  black: '#000000',
  blackOpacity: 'rgba(75,75,77,0.5)',
  red: '#f14705',
  green: '#669900',
};

const Sizes = {
  four: 4,
  eight: 8,
  twelve: 12,
  sixteen: 16,
  twenty: 20,
  twentyFour: 24,
  twentyEight: 28,
  thirtyTwo: 32,
  thirtySix: 36,
  fourty: 40,
  fourtyFour: 44,
  fourtyEight: 48,
  fiftyTwo: 52,
  fiftySix: 56,
  sixtyFour: 64,
  eighty: 80,
};

const FontSize = {
  h0: 24,
  h1: 20,
  h2: 16,
  h3: 12,
  h4: 8,
};

const defaultSideMargin = 20;
const defaultBorderRadius = 3;
const defaultBottomSpace = getBottomSpace();
const defaultStatusBarHeight = getStatusBarHeight() + 4;
const navigationBarHeight = 60;

export {
  Colors,
  Sizes,
  FontSize,
  defaultSideMargin,
  defaultBorderRadius,
  defaultBottomSpace,
  defaultStatusBarHeight,
  navigationBarHeight,
};
