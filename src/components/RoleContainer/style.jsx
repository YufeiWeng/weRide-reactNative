import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 10,
    borderColor: 'Black',
    overflow: 'hidden',
    // marginBottom: 20,
  },
  selectedContainer: {
    borderColor: 'blue',
  },
  imageContainer: {
    position: 'absolute',
    height: 10,
  },
  image: {
    size: '50%',
  },
  swooshContainer: {
    position: 'absolute',
    // top: -30,
    // left: 0,
    // right: 0,
    alignItems: 'flex-start',
  },
  swoosh: {
    height: 30,
    width: '50%',
    backgroundColor: 'blue',
    transform: [{rotate: '45deg'}],
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',

    padding: 10,
  },
});
