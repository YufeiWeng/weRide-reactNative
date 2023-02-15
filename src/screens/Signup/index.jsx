import React, {useState} from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import {ucsdEmailRegex} from '../../constants';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../components/LongButton';
import FormInput from '../../components/FormInput';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Signup = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const logoUrl = require('../../assets/images/round_logo_no_text.png');

  const onVerifyPressed = async data => {
    console.log('go');
    console.log(btnDisabled);
    if (btnDisabled) {
      return;
    }
    console.log('stop');
    navigation.navigate('Verification');

    // const url = API_BASE_URL + '/user-service/register';
    // console.log(url);
    // const response = await axios.post(url, {
    //   email: data.email,
    //   password: data.password,
    // });
    // console.log(response.data);
  };

  const validateEmail = () => {
    if (!ucsdEmailRegex.test(email)) {
      setErrorMessage(
        'This email is invalid, you can only sign up with a valid UCSD email. Please use your valid UCSD email.',
      );
      setBtnDisabled(true);
      return;
    }

    // todo: This email already exist. You can try log in with this email
    setErrorMessage('');
    setBtnDisabled(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image source={logoUrl} style={styles.logo} />
        <Text style={styles.title}>Sign Up</Text>
        <Text>If you already have an account register.</Text>
        <Text style={{marginBottom: 52}}>
          You can {}
          <Text
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login Here!
          </Text>
        </Text>

        <FormInput
          tag={'Email'}
          icon={<Fontisto name={'email'} style={{marginRight: 8}} size={16} />}
          onChangeText={setEmail}
          errorMessage={errorMessage}
          value={email}
          autoCorrect={false}
          autoCapitalize={'none'}
          inputMode={'email'}
          onBlur={validateEmail}
          placeholder={'Enter your UCSD email address'}
        />

        <LongBottom
          onPress={onVerifyPressed}
          disabled={btnDisabled}
          text={'Verify Email'}
        />

        {/*todo: update hyperlink url*/}
        <Text style={styles.agreement}>
          By signing up, you're agreeing to our
          <Text onPress={() => Linking.openURL()} style={styles.hyperlink}>
            Terms & Conditions{' '}
          </Text>
          and
          <Text onPress={() => Linking.openURL()} style={styles.hyperlink}>
            {' '}
            Privacy Policy
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
