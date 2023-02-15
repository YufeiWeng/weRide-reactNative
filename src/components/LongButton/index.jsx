import React from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';

const LongBottom = ({onPress, disabled = false, text, otherStyle}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        style.btn,
        disabled ? {backgroundColor: '#CACFDA'} : {backgroundColor: '#172B54'},
        otherStyle,
      ]}>
      <Text style={style.btnText}>{text}</Text>
    </Pressable>
  );
};

export default LongBottom;
