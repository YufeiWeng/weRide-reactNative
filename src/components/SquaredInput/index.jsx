import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import style from './style';

/**
 * component for a complete form input
 * @component
 * @param {string} tag the question tag
 * @param {string} onChangeText
 * @param errorMessage
 * @param value
 * @param autoCorrect
 * @param autoCapitalize
 * @param inputMode
 * @param onBlur
 * @param placeholder
 * @returns {JSX.Element}
 * @constructor
 */
const FormInput = ({
  tag,
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
          style.container,
          errorMessage ? {borderColor: '#FF432A'} : {borderColor: 'black'},
        ]}>
        <Text style={style.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={text => onChangeText(text)}
          value={value}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          inputMode={inputMode}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={'#888181'}
          style={{padding: 2, fontSize: 14}} 
        />
      </View>
      {errorMessage ? (
        <Text style={style.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default FormInput;
