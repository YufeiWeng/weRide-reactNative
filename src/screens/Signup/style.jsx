import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    padding: 38,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
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
  buttonText: {
    fontSize: 100,
    color: 'orange',
    lineHeight: 50,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  emailStyle: {
    fontSize: 13,
    fontWeight: '500',
  },
});

export default styles;
