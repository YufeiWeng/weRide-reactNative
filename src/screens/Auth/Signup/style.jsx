import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    paddingLeft: scale(30),
    paddingRight: scale(30),
  },
  logo: {
    width: scale(64),
    height: scale(64),
    marginTop: scale(50),
    marginBottom: scale(20),
  },
  title: {
    fontSize: scale(30),
    fontWeight: '500',
    color: 'black',
    lineHeight: scale(45),
    marginBottom: scale(22),
  },
  loginBtn: {
    color: Colors.CORAL,
    fontWeight: '700',
  },
  agreement: {
    fontSize: scale(12),
    color: '#252525',
    flexWrap: 'wrap',
  },
  hyperlink: {
    color: '#4A73DA',
  },
  baseText: {
    color: '#000000',
  },
});

export default styles;
