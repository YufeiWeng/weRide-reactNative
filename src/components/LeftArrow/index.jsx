import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './style';
import {useNavigation} from '@react-navigation/core';

const LeftArrow = ({screen, title}) => {
  const navigation = useNavigation();
  return (
    <View style={style.box}>
      <AntDesign
        name={'arrowleft'}
        style={style.icon}
        size={24}
        onPress={() => {
          navigation.navigate(screen);
        }}
      />
      <Text style={style.h1}>{title}</Text>
    </View>
  );
};

export default LeftArrow;
