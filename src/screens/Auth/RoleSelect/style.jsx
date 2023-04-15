import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 18,
  },
  logo: {
    width: 64,
    height: 80,
    marginTop: 30,
    marginBottom: 20,
  },
  title1: {
    fontSize: 38,
    color: 'black',
    font: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 45,
  },
  title2: {
    fontSize: 32,
    fontWeight: '300',
    font: 'Poppins',
    color: 'black',
    lineHeight: 45,
    marginBottom: 22,
  },
  driver: {
    alignItems: 'flex-start',
    width: 50,
    height: 50,
  },
  rider: {
    alignItems: 'flex-start',
    width: 154,
    height: 244,
  },
  containerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
  },
  container: {
    width: 154,
    height: 244,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: '#E5E5E5',
    borderWidth: 2,
    borderColor: '#000000',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444444',
    marginTop: 10,
  },
  btn: {
    position: 'absolute',
    top: 550,
  },
});

export default styles;
