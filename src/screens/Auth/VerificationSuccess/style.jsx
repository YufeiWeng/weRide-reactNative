import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 38,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    top: height * 0.36,
  },
  subTitle: {
    top: height * 0.37
  },
  btn: {
    position: 'absolute',
    top: height * 0.57,
    textAlign: 'center',
  },
  img: {
    position: 'absolute',
  },
  img1: {
    position: 'absolute',
    top: height * 0.21,
  }
});

export default styles;
