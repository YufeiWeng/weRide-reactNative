import React, {useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, View} from 'react-native';
import styles from './style';
import {useForm} from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {AuthContext} from '../../navigation/navigation';
import {ucsdEmailRegex} from "../../constants";

const {width: ScreenWidth} = Dimensions.get('screen');
const Index = () => {
  const auth = React.useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const onSignInPressed = async data => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      console.log(auth);
      await auth.signIn({email: data.email, password: data.password});
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {};

  const onSignUpPress = () => {
    navigation.navigate('Signup');
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
            text={loading ? 'Loading...' : 'Sign In'}
            onPress={handleSubmit(onSignInPressed)}
          />

          <CustomButton
            text="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <CustomButton
            text="Don't have an account? Create one"
            onPress={onSignUpPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
