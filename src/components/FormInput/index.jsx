import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import style from './style';

/**
 * component for a complete form input
 * @component
 * @param {string} tag the question tag
 * @param {Object} icon the icon 
 * @param {string} onChangeText
 * @param {string} errorMessage the error message that may appear below the layout
 * @param {string} value
 * @param autoCorrect
 * @param autoCapitalize
 * @param inputMode
 * @param onBlur
 * @param placeholder the content that soon will appear in the layout
 * @returns {JSX.Element}
 * @constructor
 */
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
          placeholderTextColor={"#888181"}
          style={{padding: 2, fontSize: 16, color: 'black'}}
        />
      </View>
      {errorMessage ? (
        <Text style={style.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default FormInput;
