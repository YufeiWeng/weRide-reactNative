import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../constants/constants';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.375,
    width: 264,
    height: 105,
  },
  btn: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.75,
  },
});

export default styles;
