import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../constants/constants';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  slogan: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.2085,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
  },
  img: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.28,
    left: SCREEN_WIDTH * 0.2,
    width: 353 * 0.8,
    height: 350 * 0.8,
  },
  img1: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.28,
    left: SCREEN_WIDTH * 0.25,
    width: 228.768 * 0.8,
    height: 291.168 * 0.8,
  },
  tip: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.61,
    fontSize: 17,
    textAlign: 'center',
  },
  btn: {
    position: 'absolute',

    top: SCREEN_HEIGHT * 0.75,
    textAlign: 'center',
  },
  btn1: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.85,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
