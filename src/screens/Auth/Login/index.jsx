import React, {useState} from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import {ucsdEmailRegex} from '../../../constants/constants';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../../components/LongButton';
import FormInput from '../../../components/FormInput';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); //I guess write like this?
  const [errorMessage, setErrorMessage] = useState('');
  const [incorrectPasswordError, setIncorrectPasswordError] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const logoUrl = require('../../../assets/images/logo/round_logo_no_text.png');

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

  const validatePassword = () => {
    //todo
    return;
  };
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image source={logoUrl} style={styles.logo} />
        <Text style={styles.title}>Login in</Text>
        <Text>If you don't have an account register.</Text>
        <Text style={{marginBottom: 52}}>
          You can {}
          <Text
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            Sign up here!
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

        <FormInput
          tag={'Password'}
          icon={<Feather name={'lock'} style={{marginRight: 8}} size={16} />}
          onChangeText={setPassword}
          errorMessage={incorrectPasswordError}
          value={password}
          autoCorrect={false}
          autoCapitalize={'none'}
          inputMode={'password'}
          onBlur={validatePassword} //todo how to onblue this
          placeholder={'Enter your password'}
        />

        <Text style={{marginBottom: 52}}>
          <Text
            style={styles.leftText}
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}>
            Forget Password?
          </Text>
        </Text>

        <LongBottom
          onPress={() => {
            navigation.navigate('Home');
          }} //Todo verify login infos
          disabled={btnDisabled}
          text={'Login'}
          otherStyle={styles.btn}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
