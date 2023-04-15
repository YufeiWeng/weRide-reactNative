import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 80,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5E6',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20,

    display: 'flex',
    flexDirection: 'row',

    padding: 5,

    fontSize: 12,
    fontWeight: '700',
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBlock: {
    backgroundColor: Colors.PRIMARY_COLOR,
    borderRadius: 20,
  },
  selectedText: {
    color: '#fff',
    fontWeight: '700',
  },
  unselectedText: {
    color: '#96A0B5',
    fontWeight: '700',
  },
});
export default styles;
