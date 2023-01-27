import React, {useState} from 'react';
import {Alert, SafeAreaView, ScrollView, View} from 'react-native';
import styles from '../Login/style';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import {API_BASE_URL} from '../../constants';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';

const Signup = () => {
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
          <CustomInput
            name="email"
            placeholder="email"
            control={control}
            rules={{
              required: 'email is required',
              pattern: {
                value: ucsdEmailRegex,
                message: 'Use @ucsd.edu',
              },
            }}
          />

          <CustomInput
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
          />

          <CustomButton
            text={loading ? 'Loading...' : 'Sign up'}
            onPress={handleSubmit(onSignupPressed)}
          />

          <CustomButton
            text="Already have a account? Log in"
            onPress={onLoginPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
