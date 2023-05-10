import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
import LongBottom from '../../../components/LongButton';

const VerificationSuccess = () => {
  const blueBackground = require('../../../assets/images/varification_success/background.png');
  const mark = require('../../../assets/images/varification_success/mark.png');

  return (
    <View style={styles.root}>
      <Image style={styles.img}source={blueBackground} />
      <Image style={styles.img1}source={mark} />
      <Text style={styles.title}>Email verified!</Text>
      <Text style={styles.subTitle}>You can proceed to set your password</Text>
      {/*todo: navigate to home page*/}
      <LongBottom otherStyle={styles.btn} text={'Continue'} onPress={() => {}} />
    </View>
  );
};

export default VerificationSuccess;
