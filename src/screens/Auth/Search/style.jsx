import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    padding: 38,
  },
  headText: {
    position: 'absolute',
    fontSize: 22,
    left: width * -0.2
  },
  inputBox: {
    top: height * 0.02,
    height: 60, 
    left: width * -0.45,
    width: width * 0.9, 
    borderColor: 'gray', 
    borderWidth: 2, 
    borderRadius: 20,  
    fontSize: 18,
    textAlign: "center",
  },
  loc: {
    top: height * 0.042,
    left: width * 0.01
  },
  locations: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection:"row",
  },
  grayloc: {
    left: width * -0.05,
    top: 5
  }
});

export default styles;
