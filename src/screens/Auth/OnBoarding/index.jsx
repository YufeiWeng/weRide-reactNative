import React from 'react';
import {
  SafeAreaView,
  Image,
  FlatList,
  View,
  Text,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import styles from './style';

const {width, height} = Dimensions.get('window');
const COLORS = {primary: '#F5F5F5', titleColor: '#172B4D'};
const slides = [
  {
    id: '1',
    image: require('../../../assets/images/on_boarding/matched_on_boarding_get_match.png'),
    title: 'Get Matched!',
    subtitle:
      'Schedule you trip ahead and get a match with your driver/rider. ',
  },
  {
    id: '2',
    image: require('../../../assets/images/on_boarding/driver_on_boarding_driver.png'),
    title: 'Certified Driver and Rider',
    subtitle: 'All drivers and riders are certified UCSD students.',
  },
];
const logoImg = require('../../../assets/images/logo/logo_text_at_bottom.png');
const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.title}>{item?.title}</Text>
      <Image
        source={item?.image}
        style={{height: '75%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnBoarding = () => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      navigation.navigate('GetStarted');
    }
  };

  const skip = () => {
    navigation.navigate('GetStarted');
  };

  const Indicator = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        {/* Render indicator */}
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: COLORS.titleColor,
                width: 25,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  const SkipBtn = () => {
    return (
      <Text
        onPress={skip}
        style={{
          position: 'absolute',
          fontSize: 18,
          fontWeight: '600',
          top: 20,
          right: 20,
        }}>
        Skip
      </Text>
    );
  };

  const NextBtn = () => {
    return (
      <AntDesign
        onPress={goToNextSlide}
        name="rightcircle"
        style={{
          position: 'absolute',
          fontSize: 40,
          color: '#172B54',
          top: height * 0.88,
          right: width * 0.06,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={styles.root}>
        <SkipBtn />
        <Image source={logoImg} style={styles.logo} />
      </View>
      <FlatList
        style={styles.fl}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Indicator />
      <NextBtn />
    </SafeAreaView>
  );
};

export default OnBoarding;
