import React from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';
import {Colors} from '../../constants/colors';

const LongBottom = ({onPress, disabled = false, text, otherStyle}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        style.btn,
        disabled
          ? {backgroundColor: '#CACFDA'}
          : {backgroundColor: Colors.PRIMARY_COLOR},
        otherStyle,
      ]}>
      <Text style={style.btnText}>{text}</Text>
    </Pressable>
  );
};

export default LongBottom;
