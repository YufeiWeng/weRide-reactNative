import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../constants/constants';

const style = StyleSheet.create({
  
  inputTag: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 10,
    color: 'black',
  },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     BottomWidth: 2,
//     width: SCREEN_WIDTH * 0.75,
//     padding: 7,
//     // marginBottom: 4,
//   },
  container: {
    width: SCREEN_WIDTH * 0.75,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor : "#F3F8FF",
    height : 50,
    
  },
  label: {
    fontSize: 8,
    marginLeft: 2,
    font:"Roboto",
  },
  errorText: {
    fontSize: 10,
    color: '#FF432A',
  },
});

export default style;
