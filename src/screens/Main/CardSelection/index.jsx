import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import styles from './style';
import CardChoice from '../../../components/CardChoiceBox/';
import LeftArrow from '../../../components/LeftArrow';
const CardSelection = () => {
  const logoUrl = require('../../../assets/images/logo/round_logo_no_text.png');
  return (
    <SafeAreaView>
      <View>
        <LeftArrow screen={'Login'} title={'Select Payment Method'} />
        <View style={styles.cards}>
          <CardChoice text="Cash" imageurl={logoUrl} />
          <CardChoice text="MasterCard" imageurl={logoUrl} />
          <CardChoice text="Visa" imageurl={logoUrl} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardSelection;
