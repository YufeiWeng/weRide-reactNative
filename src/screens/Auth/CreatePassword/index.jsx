import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../../components/LongButton';
import SquaredInput from '../../../components/SquaredInput';
import Feather from 'react-native-vector-icons/Feather';

const CreatePassword = () => {
  // const auth = React.useContext(AuthContext);
  //     const onLogoutPressed = async () => {
  //     await deleteJWToken();
  //     auth.signOut();
  // };
  const invalidPasswordErrorMessage = 'Please enter valid password';
  const PasswordUnmatch = "The password doesn't match";
  const navigation = useNavigation();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [password1, setPassword1] = useState(''); //I guess write like this?
  const [password2, setPassword2] = useState('');
  const validatePassword = () => {
    // todo
    return;
  };
  const checkPasswordSame = () => {
    //todo
    return;
  };
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>Create</Text>
        <Text style={styles.title2}>Password</Text>
        <Text style={styles.regular}>Create your new password to login </Text>
        <SquaredInput
          onChangeText={setPassword1}
          errorMessage={invalidPasswordErrorMessage}
          value={password1}
          autoCorrect={false}
          autoCapitalize={'none'}
          inputMode={'password'}
          onBlur={validatePassword} //todo how to onblue this
          placeholder={'Enter your password'}
        />

        <SquaredInput
          onChangeText={setPassword2}
          errorMessage={PasswordUnmatch}
          value={password2}
          autoCorrect={false}
          autoCapitalize={'none'}
          inputMode={'password'}
          onBlur={validatePassword} //todo how to onblue this
          placeholder={'Enter your password'}
        />

        <LongBottom
          onPress={() => {
            navigation.navigate('Home');
          }} //Todo verify login infos
          disabled={btnDisabled}
          text={'Submit'}
          otherStyle={styles.btn}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreatePassword;
