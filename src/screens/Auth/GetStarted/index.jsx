import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {AuthContext} from '../../../navigation/navigation';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../../components/LongButton';

const GetStarted = () => {
  const navigation = useNavigation();
  const auth = React.useContext(AuthContext);
  const logoTextOnRightUrl = require('../../../assets/images/logo/square_logo_text_on_right.png');

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image source={logoTextOnRightUrl} style={styles.logo} />
        <LongBottom
          onPress={() => {
            navigation.navigate('LocationAndNotification');
          }}
          text={'Get Started'}
          otherStyle={styles.btn}
        />
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
