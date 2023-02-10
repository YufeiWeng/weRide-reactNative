import React, {useState} from 'react';
import {AsyncStorage, TouchableOpacity,Text,Image,Dimensions, SafeAreaView, ScrollView, View,useWindowDimensions} from 'react-native';
import styles from '../Signup/style';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {API_BASE_URL} from '../../constants';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';

import {Logo} from '../../../assets/images/uber.png';

const {width: ScreenWidth} = Dimensions.get('screen');
const Signup = () => {
  const PressableTerms = ({ text, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const {height} = useWindowDimensions();
  const ucsdEmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@ucsd\.edu$/;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const onLoginPress = () => {
    navigation.navigate('Login');
  };




  const checkIfUserSignedUp = () =>{
    const [isUserSignedUp, setIsUserSignedUp] = useState(false);

    const checkIfUserExists = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user !== null) {
          setIsUserSignedUp(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
  }
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
      navigation.navigate('Verification');
    } catch (e) {
      Alert.alert('Oops', e.response.data);
    }

    setLoading(false);
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image source={require('../../../assets/images/uber.png')} style ={[styles.logo,{height:height * 0.3}]} resizeMode="contain"/>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.signUpTips}>If you already have an account register.</Text>
          <TouchableOpacity style={styles.button} onPress={onLoginPress}>
            <Text style={styles.buttonText}>Login Here!</Text>
          </TouchableOpacity>
          
          
          {/* <CustomButton     #login in button
            text="Already have a account? Log in"
            onPress={onLoginPress}
            type="TERTIARY"
          /> */}

          <Text style={styles.signUpTips}>Email</Text> 

          <CustomInput
            name="email"
            placeholder="Enter your UCSD email address"
            control={control}
            rules={{
              required: 'email is required',
              pattern: {
                value: ucsdEmailRegex,
                message: 'This email is invalid, you can only sign up with a valid UCSD email. Please use your valid UCSD email to sign up',
              },
            }}
          />
          <Text style={styles.errorText}>This email already exist. You can try log in with this email</Text>
          


          {/* <CustomInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 3,
                message: 'Password should be minimum 3 characters long',
              },
            }}
          /> */}

          <CustomButton
            style = {styles.button}
            text={loading ? 'Loading...' : 'Verify email'}
            onPress={handleSubmit(onSignupPressed)}
          />
          {/* <Text style={styles.textContainer}>
            By signing up, you're agreeing to our 
            <PressableTerms
              text=" Terms & Conditions and Privacy" 
              onPress={onPress} 
            />
          </Text> */}
          <Text style={styles.signUpTips}>By signing up, you're agreeeing to our Terms & Conditions and Privacy Policy</Text> 


          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
