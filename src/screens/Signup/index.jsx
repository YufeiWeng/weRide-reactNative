import React, {useState} from 'react';
import {
  Alert,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from '../Signup/style';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {API_BASE_URL, ucsdEmailRegex} from '../../constants';
import axios from 'axios';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  // const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [btnClickable, setBtnClickable] = useState(false);
  const onLoginPress = () => {
    // todo
    // navigation.navigate('Login');
  };

  const onVerifyPressed = async data => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const url = API_BASE_URL + '/user-service/register';
      console.log(url);
      const response = await axios.post(url, {
        email: data.email,
        password: data.password,
      });
      console.log(response.data);
      // navigation.navigate('Verification');
    } catch (e) {
      Alert.alert('Oops', e.response.data);
    }

    setLoading(false);
  };

  const validateEmail = () => {
    if (!ucsdEmailRegex.test(email)) {
      setErrorMessage(
        'This email is invalid, you can only sign up with a valid UCSD email. Please use your valid UCSD email.',
      );
      return;
    }

    // todo: This email already exist. You can try log in with this email
    setErrorMessage('');
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image
          source={require('../../assets/images/round_logo_no_text.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Sign Up</Text>
        <Text>If you already have an account register.</Text>
        <Text style={{marginBottom: 52}}>
          You can {}
          <Text style={styles.loginBtn} onPress={onLoginPress}>
            Login Here!
          </Text>
        </Text>

        <View style={styles.form}>
          <Text style={styles.inputTag}>Email</Text>
          <View
            style={[
              styles.inputContainer,
              errorMessage ? {borderColor: '#FF432A'} : {borderColor: 'black'},
            ]}>
            <Fontisto name={'email'} style={{marginRight: 8}} size={16} />
            <TextInput
              onChangeText={text => setEmail(text)}
              value={email}
              autoCorrect={false}
              autoCapitalize={'none'}
              inputMode={'email'}
              onBlur={validateEmail}
              placeholder="Enter your UCSD email address"
              style={{padding: 2, fontSize: 16}}
            />
          </View>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>

        <Pressable
          onPress={onVerifyPressed}
          disabled={btnClickable}
          style={[
            styles.btn,
            btnClickable
              ? {backgroundColor: '#172B54'}
              : {backgroundColor: '#CACFDA'},
          ]}>
          <Text style={styles.btnText}>Verify Email</Text>
        </Pressable>

        {/*todo: update hyperlink url*/}
        <Text style={styles.agreement}>
          By signing up, you're agreeing to our
          <Text onPress={() => Linking.openURL()} style={styles.hyperlink}>
            Terms & Conditions{}
          </Text>
          and
          <Text onPress={() => Linking.openURL()} style={styles.hyperlink}>
            {}
            Privacy Policy
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
