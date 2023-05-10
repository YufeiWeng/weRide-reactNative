import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN_HEIGHT} from '../../../constants/constants';

const styles = StyleSheet.create({
  root: {
    padding: scale(20),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(10),
  },
  title: {
    fontWeight: '700',
    fontSize: scale(30),
  },
  activityStatus: {
    marginBottom: scale(10),
  },
  btn: {
    width: 10,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    height: 53,
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
});

export default styles;
