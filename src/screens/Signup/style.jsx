import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title:{
    // font-family: 'Poppins',
    // font-style: normal,
    // font-weight: 500,
    // font-size: 30px,
    // line-height: 45px,
    fontSize:30,
    color:'black',
    lineHeight:70

  },
  signUpTips:{
    font:50,
    color:'black',
    lineHeight:20
  },
  buttonText:{
    font:100,
    color:"orange",
    lineHeight:50
  },
  errorText:{
    fontSize:10,
    color:'red'
  }
});

export default styles;
