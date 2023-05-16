import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN_HEIGHT} from '../../../constants/constants';

const styles = StyleSheet.create({
  root: {
    padding: scale(20),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: scale(5),
  },
  title: {
    fontWeight: '700',
    fontSize: scale(30),
    // paddingTop:'7%',
    paddingBottom:'5%'
  },
  activityStatus: {
    marginBottom: scale(10),
  },
  icon:{
    alignItems:"flex-end",
  }
});

export default styles;
