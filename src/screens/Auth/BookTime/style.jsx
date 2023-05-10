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
        left: width * -0.15
    },
    fList: {
        position: 'absolute',
        top: height * 0.2,
        width: width, 
        height: height * 0.5
    },
    btn: {
        backgroundColor: '#158EFF',
        textAlign: 'center',
        width: width * 0.85,
        left: width * -0.02
    },
    img: {
        marginBottom: 10,
        width: 125, 
        height: 20
    }
});

export default styles;
