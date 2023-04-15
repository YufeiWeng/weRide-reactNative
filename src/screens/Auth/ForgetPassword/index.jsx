import React, {useState} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {deleteJWToken} from '../../../utils/jwt';
import {AuthContext} from '../../../navigation/navigation';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../../components/LongButton';
import FormInput from '../../../components/FormInput';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ucsdEmailRegex} from '../../../constants/constants';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const auth = React.useContext(AuthContext);
  const navigation = useNavigation();
  const notRegistedErrorMessage =
    'This email has not been registered,Please use your registered UCSD email to proceed to sign up';
  const lockUrl = require('../../../assets/images/forgot_password/lock.png');
  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
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
        <Image source={lockUrl} style={styles.logo} />
        <Text style={styles.title}>Forget the password? </Text>
        <Text>Don't worry. Let us help</Text>
        <FormInput
          tag={'Email'}
          icon={<Fontisto name={'email'} style={{marginRight: 8}} size={16} />}
          onChangeText={setEmail}
          errorMessage={errorMessage}
          value={email}
          autoCorrect={false}
          autoCapitalize={'none'}
          inputMode={'email'}
          onBlur={validateEmail} //todo when the email is not registered
          placeholder={'Enter your UCSD email address'}
        />

        <LongBottom
          onPress={() => {
            useNavigation.navigate('Home');
          }} //Todo verify login infos
          disabled={btnDisabled}
          text={'Continue'}
          otherStyle={styles.btn}
        />

        <Text style={styles.bottomText1}>
          If you don't have an account register
        </Text>
        <Text style={styles.bottomText2}>
          You can {}
          <Text
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            Sign up here!
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
