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
});

export default styles;
