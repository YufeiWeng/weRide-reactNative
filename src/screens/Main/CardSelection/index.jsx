import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Ionicons,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import CardChoice from '../../components/CardChoiceBox/';
import LeftArrow from '../../components/LeftArrow';
const CardSelection = () => {
  // const navigation = useNavigation();
  const imageUrl1 = require('../../assets/images/logo/round_logo_no_text.png');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LeftArrow screen={'Home'} title={'Select Payment Method'} />
        <View style={styles.cards}>
          <CardChoice text="Cash" image={imageUrl1} />
          <CardChoice text="MasterCard" image={imageUrl1} />
          <CardChoice text="Visa" image={imageUrl1} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardSelection;
