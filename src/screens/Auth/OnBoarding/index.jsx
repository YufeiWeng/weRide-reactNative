import React from 'react';
import {Image, SafeAreaView} from 'react-native';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/core';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import slides from '../../../constants/data/onBoardingData';
const Slide = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{data.title}</Text>
      <Image source={data.image} style={styles.image} />
      <Text style={styles.subtitle}>{data.subtitle}</Text>
      {data.id == slides.length && (
        <AntDesign
          name="rightcircle"
          style={styles.nextBtn}
          onPress={() => {
            navigation.navigate('GetStarted');
          }}
        />
      )}
    </View>
  );
};

const OnBoarding = () => {
  const logoImg = require('../../../assets/images/logo/logo_text_at_bottom.png');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.swiperContainer}>
        <Image source={logoImg} style={styles.logo} />

        <Swiper
          dot={<View style={styles.inactiveDot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={{
            bottom: 70,
          }}
          loop={false}>
          {slides.map(data => (
            <View style={styles.slide} key={data.id}>
              <Slide data={data} />
            </View>
          ))}
        </Swiper>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
