import React, {useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import styles from './style';

const FourDigitInput = ({onValueChange, errorMessage}) => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [digits, setDigits] = useState(['', '', '', '']);

  const handleDigitChange = (index, value) => {
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (!value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  useEffect(() => {
    const value = digits.join('');
    onValueChange(value);
  }, [digits, onValueChange]);

  return (
    <View style={styles.container}>
      {digits.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          value={digit}
          onChangeText={value => handleDigitChange(index, value)}
          ref={inputRefs[index]}
        />
      ))}
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default FourDigitInput;
