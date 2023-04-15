import {StyleSheet} from 'react-native';
import { Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const COLORS = {primary: '#F5F5F5', titleColor: '#172B4D'};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    alignItems: 'center',
    width: 50,
    height: 64,
    textAlign: 'center',
    top: height * 0.04,
  },
  fl: {
    position: 'absolute',
    top: height * 0.15,
  },
  subtitle: {
    color: COLORS.titleColor,
    fontSize: 14,
    marginTop: -20,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.titleColor,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
    top: height * 0.73,
  }
});

export default styles;
