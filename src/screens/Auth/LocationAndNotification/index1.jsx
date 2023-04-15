import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {deleteJWToken} from '../../../utils/jwt';
import {AuthContext} from '../../../navigation/navigation';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../../components/LongButton';

const LocationAndNotification1 = () => {
  const auth = React.useContext(AuthContext);
  const navigation = useNavigation();
  const noteImg = require('../../../assets/images/location_notification/enableNotifications.png');

  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.slogan}>Enable Notifications</Text>
        <Image source={noteImg} style={styles.img1} />
        <Text style={styles.tip}>
          Enable notifications so you don’t miss any important information.
        </Text>
        <LongBottom otherStyle={styles.btn} text={'Allow Access'} />
        <Text style={styles.btn1}>Not Now</Text>
      </View>
    </SafeAreaView>
  );
};

export default LocationAndNotification1;
