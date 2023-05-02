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
import InputCardBox from '../../components/InputCardBox/';
import LongBottom from '../../components/LongButton';
import LeftArrow from '../../components/LeftArrow';

const CardInfo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <LeftArrow screen={'Home'} title={'Card Info'} />
          <InputCardBox text="Card Number" width={342} />
          <InputCardBox text="Name" width={342} />
          <View style={styles.shortbox}>
            <InputCardBox text="10/27" width={119} />
            <InputCardBox text="123" width={119} />
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
