import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 38,
  },
  logo: {
    width: 152,
    height: 166,
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    lineHeight: 45,
    marginBottom: 22,
  },
  loginBtn: {
    color: Colors.CORAL,
    fontWeight: '700',
  },

  buttonText: {
    fontSize: 100,
    color: 'orange',
    lineHeight: 50,
  },
  agreement: {
    fontSize: 12,
    color: '#252525',

    position: 'absolute',
    height: 36,
    left: 41,
    top: 623,
  },
  hyperlink: {
    color: '#4A73DA',
  },
  btn: {
    position: 'absolute',
    top: 550,
    left: 38,
  },
  bottomText1: {
    position: 'absolute',
    bottom: -150,
    fontSize: 16,
    height: '-150%',
  },
  bottomText2: {
    position: 'absolute',
    bottom: -170,
    fontSize: 16,
  },
  container: {
    //todo
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  leftText: {
    font: 'Poppins',
    textAlign: 'left',
    fontSize: 11,
  },
  rightText: {
    font: 'Poppins',
    textAlign: 'right',
    fontSize: 11,
  },
});

export default styles;
