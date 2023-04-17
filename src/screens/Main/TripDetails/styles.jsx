import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: scale(30),
    marginLeft: 10,
  },
  board: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20,

    padding: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5E5',
    paddingBottom: 10,
  },
  date: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rateBtn: {
    justifyContent: 'center',
    borderRadius: 20,
    width: 120,
    height: 30,
  },
  rateText: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  greyText: {
    color: '#96A0B5',
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
  },
  location: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
