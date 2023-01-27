import {Alert, Animated, Image, SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './style';
import axios from 'axios';
import {API_BASE_URL} from '../../constants';
import CustomButton from '../../components/CustomButton';

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 4;
const source = {
  uri: 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};
const Verification = () => {
  const [value, setValue] = useState('');
  const [resendBtnDisabled, setResendBtnDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  const onVerifyPressed = async () => {
    if (value.length !== 4) {
      return;
    }

    try {
      const url = API_BASE_URL + '/user-service/verification/';
      const response = await axios.post(url, {
        //TODO: add email address
        code: value,
      });
      // TODO: navigation to Home page
    } catch (e) {
      Alert.alert('Oops', e.response.data);
    }
  };

  const onResendPressed = async () => {
    try {
      const url = API_BASE_URL + '/user-service/resend-verification';
      const response = await axios.post(url, {
        //TODO: add email address
        password: '123', // for pass the userCheck in backend
      });

      setResendBtnDisabled(true);
      setCountdown(60);
      const intervalId = setInterval(() => {
        setCountdown(secondsLeft => {
          if (secondsLeft <= 0) {
            clearInterval(intervalId);
            setResendBtnDisabled(false);
            return;
          }
          return secondsLeft - 1;
        });
      }, 1000);
    } catch (e) {
      Alert.alert('Oops', e.response.data);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <Image style={styles.icon} source={source} />
      <Text style={styles.subTitle}>
        Please enter the verification code{'\n'}
        we send to your email address
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <CustomButton text="Verify" onPress={onVerifyPressed} type="PRIMARY" />
      <CustomButton
        text={
          resendBtnDisabled ? `Resend email in ${countdown}s` : 'Resend Email'
        }
        onPress={onResendPressed}
        disabled={resendBtnDisabled}
        type="TERTIARY"
      />
    </SafeAreaView>
  );
};

export default Verification;
