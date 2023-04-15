import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import LongBottom from '../../../components/LongButton';

const VerificationSuccess = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Email verified!</Text>
      <Text>You can proceed to set your password</Text>
      {/*todo: navigate to home page*/}
      <LongBottom text={'Continue'} onPress={() => {}} />
    </View>
  );
};

export default VerificationSuccess;
