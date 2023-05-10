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
    calendar: {
        top: height * 0.15, 
        width: width * 0.9,
        left: width * -0.03
    },
    btn: {
        position: 'absolute',
        top: height * 0.78,
        left: width * 0.07,
        textAlign: 'center',
        width: width * 0.85
    },
});

export default styles;
