import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../constants';
const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    padding: 38,
  },
  logo: {
    width: 64,
    height: 64,
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
    lineHeight: 45,
    marginBottom: 22,
  },
  loginBtn: {
    color: '#FE8E67',
    fontWeight: '700',
  },
  form: {
    marginBottom: 100,
  },
  buttonText: {
    fontSize: 100,
    color: 'orange',
    lineHeight: 50,
  },
  errorText: {
    fontSize: 10,
    color: '#FF432A',
  },
  inputTag: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 10,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    width: SCREEN_WIDTH * 0.75,
    padding: 7,
    marginBottom: 4,
  },
  btnText: {
    fontSize: 17,
    color: '#fff',
  },
  btn: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 32,
    marginBottom: 20,
    // box shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 5, // for Android

    position: 'absolute',
    height: 53,
    left: 38,
    top: 551,
  },
});

export default styles;
