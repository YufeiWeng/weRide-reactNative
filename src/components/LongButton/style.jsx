import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
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
  },
  btnText: {
    fontSize: 17,
    color: '#fff',
  },
});

export default style;
