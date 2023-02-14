import React, {useState} from 'react';
import {TextInput, Text} from 'react-native';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = text => {
    setEmail(text);
  };

  const validateEmail = () => {
    if (!email) {
      setErrorMessage('Email cannot be empty');
    } else if (!email.endsWith('@ucsd.edu')) {
      setErrorMessage('Email should be a UCSD email');
    } else {
      checkEmailAvailability(email);
    }
    setErrorMessage(null);
  };

  const checkEmailAvailability = email => {
    // TODO: Call backend API to check if email is used
    // If email is used, setErrorMessage('This email has been used')
    // Otherwise, submit the form or do whatever is necessary
  };

  return <></>;
};

export default EmailInput;
