import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import styles from './style';
import CardChoice from '../../../components/CardChoiceBox/';
import LeftArrow from '../../../components/LeftArrow';
const CardSelection = () => {
  const logoUrl1 = require('../../../assets/images/card_info/payment1.png');
  const logoUrl2 = require('../../../assets/images/card_info/payment2.png');
  const logoUrl3 = require('../../../assets/images/card_info/payment3.png');
  return (
    <SafeAreaView>
      <View>
        <LeftArrow screen={'Login'} title={'Select Payment Method'} />
        <View style={styles.cards}>
          <CardChoice text="Cash" imageurl={logoUrl1} />
          <CardChoice text="MasterCard" imageurl={logoUrl2} />
          <CardChoice text="Visa" imageurl={logoUrl3} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardSelection;
