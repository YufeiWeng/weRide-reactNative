import React, {useRef} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import style from './style';

/**
 * component for a complete form input
 * @component
 * @param {string} tag the question tag
 * @param {Object} icon
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
  const inputRef = useRef(null);

  const handlePress = () => {
    inputRef.current.focus();
  };

  return (
    <Pressable style={style.form} onPress={handlePress}>
      <Text style={style.inputTag}>{tag}</Text>
      <View
        style={[
          style.inputContainer,
          errorMessage ? {borderColor: '#FF432A'} : {borderColor: 'black'},
        ]}>
        {icon}
        <TextInput
          style={{padding: 2, fontSize: 16, width: '100%'}}
          ref={inputRef}
          onChangeText={text => onChangeText(text)}
          value={value}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          inputMode={inputMode}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={'#888181'}
        />
      </View>
      {errorMessage ? (
        <Text style={style.errorText}>{errorMessage}</Text>
      ) : null}
    </Pressable>
  );
};

export default FormInput;
