import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import style from './style';

const FormInput = ({
  tag,
  icon,
  onChangeText,
  errorMessage,
  value,
  autoCorrect = false,
  autoCapitalize = 'none',
  inputMode,
  onBlur,
  placeholder,
}) => {
  return (
    <View style={style.form}>
      <Text style={style.inputTag}>{tag}</Text>
      <View
        style={[
          style.inputContainer,
          errorMessage ? {borderColor: '#FF432A'} : {borderColor: 'black'},
        ]}>
        {icon}
        <TextInput
          onChangeText={text => onChangeText(text)}
          value={value}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          inputMode={inputMode}
          onBlur={onBlur}
          placeholder={placeholder}
          style={{padding: 2, fontSize: 16}}
        />
      </View>
      {errorMessage ? (
        <Text style={style.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default FormInput;
