import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import style from './style';

/**
 * component for a complete form input
 * @component
 * @param {string} tag the question tag
 * @param {Object} icon the icon 
 * @param {Function} onChangeText prop that takes a function to be called every time the text changed
 * @param {Text} errorMessage the error message that may appear below the layout
 * @param {Text} value the content that the user types
 * @param {boolean} autoCorrect if false, disables auto-correct
 * @param {Enumerator} autoCapitalize certain characters that automatically capitalize
 * @param {Enumerator} inputMode works like the inputmode attribute in HTML, it determines which keyboard to open, e.g. numeric
 * @param {Function} onBlur callback that is called when the text input is blurred.
 * @param {Text} placeholder the initial value that will change when the user starts typing
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
