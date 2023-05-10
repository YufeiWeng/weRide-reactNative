import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/core';
import InputCardBox from '../../../components/InputCardBox/';
import LongBottom from '../../../components/LongButton';
import LeftArrow from '../../../components/LeftArrow';

const CardInfo = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <LeftArrow screen={'Login'} title={'Card Info'} />
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/card_info/card_sample.png')}
            style={styles.image}
          />
        </View>
        <View>
          <InputCardBox placeholder="Card Number" width={342} />
          <InputCardBox placeholder="Name" width={342} />
          <View style={styles.shortbox}>
            <InputCardBox placeholder="10/27" width={119} />
            <InputCardBox placeholder="123" width={119} />
          </View>
          <View style={{justifyContent: 'center', paddingLeft: 24}}>
            <LongBottom
              onPress={() => {
                navigation.navigate('Home');
              }} //Todo verify login infos
              // disabled={btnDisabled}
              text={'Add Card'}
              otherStyle={styles.btn}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardInfo;
