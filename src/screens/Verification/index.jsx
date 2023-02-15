import {Alert, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants';
import LongBottom from '../../components/LongButton';
import FourDigitInput from '../../components/FourDigitInput';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Verification = () => {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [resendBtnDisabled, setResendBtnDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const navigation = useNavigation();
  const onVerifyPressed = async () => {
    if (code.length !== 4) {
      return;
    }

    try {
      const url = API_BASE_URL + '/user-service/verification/';
      const response = await axios.post(url, {
        //TODO: add email address
        code: code,
      });
      // TODO: navigation to Home page
    } catch (e) {
      Alert.alert('Oops', e.response.data);
    }
  };

  const onResendPressed = async () => {
    try {
      const url = API_BASE_URL + '/user-service/resend-verification';
      // const response = await axios.post(url, {
      //   //TODO: add email address
      // });
      //
      setResendBtnDisabled(true);
      setCountdown(60);
      const intervalId = setInterval(() => {
        setCountdown(secondsLeft => {
          if (secondsLeft <= 0) {
            clearInterval(intervalId);
            setResendBtnDisabled(false);
            return;
          }
          return secondsLeft - 1;
        });
      }, 1000);
    } catch (e) {
      Alert.alert('Oops', e.response.data);
    }
  };

  const handleValueChange = value => {
    setCode(value);
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Ionicons
          name={'arrow-back'}
          size={30}
          onPress={() => navigation.navigate('Signup')}
        />
        <Text style={styles.title}>Verification Code</Text>
        <Text>Enter code that we have sent to your email your...@ucsd.edu</Text>

        <FourDigitInput
          onValueChange={handleValueChange}
          errorMessage={errorMessage}
        />
        <LongBottom
          onPres={onVerifyPressed}
          text={'Submit'}
          otherStyle={styles.submitBtn}
        />
        <Text onPress={onResendPressed} style={styles.resendBtn}>
          {resendBtnDisabled ? `Resend code in ${countdown}s` : 'Resend code'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
