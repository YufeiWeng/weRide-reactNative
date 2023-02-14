import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from '../Signup/style';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {API_BASE_URL, ucsdEmailRegex} from '../../constants';
import axios from 'axios';

const {width: ScreenWidth} = Dimensions.get('screen');
const Signup = () => {
  const {height} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  // const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const onLoginPress = () => {
    // todo
    // navigation.navigate('Login');
  };

  // const checkIfUserSignedUp = () => {
  //   const [isUserSignedUp, setIsUserSignedUp] = useState(false);
  //
  //   const checkIfUserExists = async () => {
  //     try {
  //       const user = await AsyncStorage.getItem('user');
  //       if (user !== null) {
  //         setIsUserSignedUp(true);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  // };
  // html + css
  const onSignupPressed = async data => {
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
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Sign Up</Text>
        <Image
          source={require('../../assets/images/round_logo_no_text.png')}
          style={{width: 100, height: 100}}
        />
        <Text>If you already have an account register.</Text>
        <Text>
          You can {}
          <Pressable style={styles.text}>
            <Text style={styles.loginBtn}>Login Here!</Text>
          </Pressable>
        </Text>
        <View style={{marginBottom: 52}} />
        <Text style={styles.emailStyle}>Email</Text>

        <CustomInput
          name="email"
          placeholder="Enter your UCSD email address"
          control={control}
          rules={{
            required: 'email is required',
            pattern: {
              value: ucsdEmailRegex,
              message:
                'This email is invalid, you can only sign up with a valid UCSD email. Please use your valid UCSD email to sign up',
            },
          }}
        />
        <Text style={styles.errorText}>
          This email already exist. You can try log in with this email
        </Text>

        <CustomButton
          style={styles.button}
          text={loading ? 'Loading...' : 'Verify email'}
          onPress={handleSubmit(onSignupPressed)}
        />

        <Text style={styles.signUpTips}>
          By signing up, you're agreeing to our Terms & Conditions and Privacy
          Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
