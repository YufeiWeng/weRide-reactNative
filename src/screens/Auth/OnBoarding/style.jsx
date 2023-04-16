import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const COLORS = {primary: '#F5F5F5', titleColor: '#172B4D'};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  root: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 700,
  },
  logo: {
    width: 50,
    height: 64,
    top: height * 0.04,
    marginBottom: 65,
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
    width: width * 0.8,
    resizeMode: 'contain',
  },
  skipText: {
    fontSize: 18,
    fontWeight: '600',
  },
  swiperContainer: {
    alignItems: 'center',
    flex: 1,
  },
  inactiveDot: {
    backgroundColor: '#D9D9D9',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  activeDot: {
    backgroundColor: '#171616',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  nextBtn: {
    position: 'absolute',
    fontSize: 48,
    color: '#172B54',
    top: height * 0.68,
    right: width * 0.06,
  },
});

export default styles;
