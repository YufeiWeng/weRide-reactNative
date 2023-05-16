import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: height,
      width: width,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },

    map: {
      ...StyleSheet.absoluteFillObject,
    },

    panel: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      }
});

export default styles;