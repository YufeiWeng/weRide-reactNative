import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {deleteJWToken} from '../../../utils/jwt';
import {AuthContext} from '../../../navigation/navigation';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../../components/LongButton';

const LocationAndNotification = () => {
  const auth = React.useContext(AuthContext);
  const navigation = useNavigation();
  const addressImg = require('../../../assets/images/location_notification/addressCuate.png');

  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.slogan}>Access Your Location</Text>
        <Image source={addressImg} style={styles.img} />
        <Text style={styles.tip}>
          We will need your location to give you better experience.
        </Text>
        <LongBottom
          otherStyle={styles.btn}
          text={'Allow Access'}
          onPress={() => {
            navigation.navigate('LocationAndNotification1');
          }}
        />
        <Text
          style={styles.btn1}
          onPress={() => {
            navigation.navigate('LocationAndNotification1');
          }}>
          Not Now
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LocationAndNotification;
