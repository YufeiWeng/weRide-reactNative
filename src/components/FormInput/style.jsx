import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../constants';

const style = StyleSheet.create({
  form: {
    marginBottom: 100,
  },
  inputTag: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    width: SCREEN_WIDTH * 0.75,
    padding: 7,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 10,
    color: '#FF432A',
  },
});

export default style;
