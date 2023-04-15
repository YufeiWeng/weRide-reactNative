import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import LongBottom from '../../../components/LongButton';

const RoleSelect = () => {
  const logoUrl = require('../../../assets/images/logo/logo_text_at_bottom.png');

  const navigation = useNavigation();
  const [riderSelected, setRiderSelected] = useState(false);

  const Container = ({imageSource, label, onSelect, isSelected}) => {
    const handlePress = () => {
      onSelect();
    };

    return (
      <TouchableOpacity
        style={[styles.container, isSelected && styles.selectedContainer]}
        onPress={handlePress}
        disabled={isSelected}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  };

  const handleRiderSelect = () => {
    setRiderSelected(true);
  };
  const handleDriverSelect = () => {
    setRiderSelected(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Image source={logoUrl} style={styles.logo} />
        <Text style={styles.title1}>Choose</Text>
        <Text style={styles.title2}>Your Role</Text>
        <View style={styles.containerWrapper}>
          <Container
            imageSource={require('../../../assets/images/choose_your_role/rider.png')}
            label="Rider"
            onSelect={handleRiderSelect}
            isSelected={riderSelected}
          />
          <Container
            imageSource={require('../../../assets/images/choose_your_role/driver.png')}
            label="Driver"
            onSelect={handleDriverSelect}
            isSelected={!riderSelected}
          />
        </View>
        <LongBottom
          onPress={() => {
            navigation.navigate('OnBoarding');
          }}
          text={'Login'}
          otherStyle={styles.btn}
        />
      </View>
    </SafeAreaView>
  );
};

export default RoleSelect;
